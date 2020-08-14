import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import location from './services/location';
import api from './services/api';
import Navigation from './src/navigation/index';

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
      <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
