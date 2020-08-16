import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import location from './services/location';
import Navigation from './src/navigation/index';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  useEffect(() => {
    (async () => {
      try {
        const data = await location();
        alert(JSON.stringify(data))
      } catch (error) {
        alert(error)
      }

    })();
  },[]);
  return (
      <>
        <StatusBar style='inverted' backgroundColor='black' />
        <Navigation/>
      </>
  );
}
