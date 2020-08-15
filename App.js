import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import location from './services/location';
import Navigation from './src/navigation/index';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  useEffect(() => {
    (async () => {
      try {
        //const data = await location();
        //const response = await api.get('/positions.json?search=node');
        //alert(JSON.stringify(response.data))
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
