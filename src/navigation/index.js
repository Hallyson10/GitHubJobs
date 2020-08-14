import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionSpecs,CardStyleInterpolators,TransitionPresets } from '@react-navigation/stack';
import Home from '../screens/home';
import ProfileJob from '../screens/profile_job';

import { useFonts } from 'expo-font';


const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'RedHatText-Bold' : require("../../assets/RedHatText-Bold.ttf"),
    'RedHatText-Medium' : require("../../assets/RedHatText-Medium.ttf"),
    'RedHatText-Regular' : require("../../assets/RedHatText-Regular.ttf"),

  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <NavigationContainer>
    <Stack.Navigator
     screenOptions={{
      gestureEnabled :true,
      gestureDirection:'horizontal',
      ...TransitionPresets.SlideFromRightIOS,
      cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS,
      
    }}
    animation="fade"
    headerMode="float"
    
    >
        <Stack.Screen 
        options={{
          headerShown:false
        }} name="Home" component={Home} />
        <Stack.Screen 
        options={({route})=>({
          headerShown:true,
          title:route.params.title,
          headerTitleAlign:'center',
          cardStyleInterpolator : CardStyleInterpolators.forRevealFromBottomAndroid,
          gestureEnabled : true,
        })} name="ProfileJob" component={ProfileJob}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}