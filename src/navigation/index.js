import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators,TransitionPresets } from '@react-navigation/stack';
import Home from '../screens/home';
import ProfileJob from '../screens/profile_job';
import HowToApply from '../screens/how_to_apply';
import ApplyMessage from '../screens/apply_message';
import Search from '../screens/search';
import WebView from '../screens/web_view/index';
import PageDocumentation1 from '../screens/documentation/page_1';
import PageDocumentation2 from '../screens/documentation/page_2';
import PageDocumentation3 from '../screens/documentation/page_3';
import { JobsProvider } from '../contexts/jobs';
import { useFonts } from 'expo-font';
import colors from '../fontes/colors';

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
        <JobsProvider>
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
            headerShown:false,
        }}  name="Home" component={Home} />
        <Stack.Screen 
            options={({route})=>({
            headerShown:true,
            title:route.params.title,
            headerTitleAlign:'center',
            headerTitleStyle:{fontFamily : 'RedHatText-Bold'},
            headerStyle:{backgroundColor:colors.primary},
            cardStyleInterpolator : CardStyleInterpolators.forRevealFromBottomAndroid,
            gestureEnabled : true,
        })} name="ProfileJob" component={ProfileJob}
         />
         <Stack.Screen 
            options={({route})=>({
            headerShown:true,
            title:'How to apply',
            headerTitleAlign:'center',
            headerTitleStyle:{fontFamily : 'RedHatText-Bold'},
            headerStyle:{backgroundColor:colors.primary},
            cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled : true,
        })} name="HowToApply" component={HowToApply}
         />
          <Stack.Screen 
            options={({route})=>({
            headerShown:true,
            title:'Search Jobs',
            headerTitleAlign:'center',
            headerTitleStyle:{fontFamily : 'RedHatText-Bold'},
            headerStyle:{backgroundColor:colors.primary},
            cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled : true,
        })} name="Search" component={Search}
         />
         <Stack.Screen 
            options={({route})=>({
            headerShown:true,
            title:'Apply',
            headerTitleAlign:'center',
            headerTitleStyle:{fontFamily : 'RedHatText-Bold'},
            headerStyle:{backgroundColor:colors.primary},
            cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled : true,
        })} name="ApplyMessage" component={ApplyMessage}
         />
         <Stack.Screen 
            options={({route})=>({
            headerShown:false,
            title:'Apply',
            headerTitleAlign:'center',
            headerTitleStyle:{fontFamily : 'RedHatText-Bold'},
            headerStyle:{backgroundColor:colors.primary},
            cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled : true,
        })} name="WebView" component={WebView}
         />
         <Stack.Screen 
            options={({route})=>({
            headerShown:true,
            title:'Documentation',
            headerTitleAlign:'center',
            headerTitleStyle:{fontFamily : 'RedHatText-Bold'},
            headerStyle:{backgroundColor:colors.primary},
            cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled : true,
          })} name="PageDocumentation1" component={PageDocumentation1}
         />
         <Stack.Screen 
            options={({route})=>({
            headerShown:true,
            title:'Documentation',
            headerTitleAlign:'center',
            headerTitleStyle:{fontFamily : 'RedHatText-Bold'},
            headerStyle:{backgroundColor:colors.primary},
            cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled : true,
          })} name="PageDocumentation2" component={PageDocumentation2}
         />
         <Stack.Screen 
            options={({route})=>({
            headerShown:true,
            title:'Documentation',
            headerTitleAlign:'center',
            headerTitleStyle:{fontFamily : 'RedHatText-Bold'},
            headerStyle:{backgroundColor:colors.primary},
            cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled : true,
          })} name="PageDocumentation3" component={PageDocumentation3}
         />
      </Stack.Navigator>
      </JobsProvider>
    </NavigationContainer>
  );
}