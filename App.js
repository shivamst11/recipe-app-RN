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

} from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import MainRoute from './src/Routes/Routes';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <MainRoute />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default App;
