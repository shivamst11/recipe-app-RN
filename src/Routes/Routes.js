import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Component/Home'
import Screen from '../Component/Screen';

const Tab = createBottomTabNavigator();

function MainRoute() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Screen" component={Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainRoute;
