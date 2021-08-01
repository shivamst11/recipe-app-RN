/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MainRoute from './src/Routes/Routes';
import { NavigationContainer } from '@react-navigation/native';




const App =() => {
 

  return (
  
      <MainRoute/>
 
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
  
    justifyContent:'center',
    backgroundColor: 'white'
  },
});

export default App;
