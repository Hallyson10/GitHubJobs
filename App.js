import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/navigation/index';
import { StatusBar } from 'expo-status-bar';
console.disableYellowBox = true;
export default function App() {
  return (
      <>
        <StatusBar style='inverted' backgroundColor='black' />
        <Navigation/>
      </>
  );
}
