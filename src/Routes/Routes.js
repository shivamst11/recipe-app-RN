/**
 * Navigation File
 * @author Shivam Tripathi
 * @description Route of the application.
 * @flow
 */

import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Component/Home';
import Post from '../Component/Post';
import Profile from '../Component/Profile';
import Notification from '../Component/Notification';
import Search from '../Component/Search';
import GlobalStyles from '../Utility/GlobalStyles';

const Tab = createBottomTabNavigator();

function MainRoute() {
  const {grey, lightyellow, black} =GlobalStyles.colorCodes
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: GlobalStyles.colorCodes.lightyellow,
          style: { borderTopWidth: 0 }
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: ({focused}) => (
              <MyTabBarLabel title={'Home'} focused={focused} />
            ),
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="home-filled" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Post"
          component={Post}
          options={{
            tabBarLabel: ({focused}) => (
              <MyTabBarLabel title={'Post'} focused={focused} />
            ),
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="lead-pencil"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: ({focused}) => (
              <MyTabBarLabel title={'Search'} focused={focused} />
            ),
            tabBarIcon: ({focused}) => (
              <View style={styles.searchCircle}>
                <Image
                  
                  source={require('../Assets/Image/search.png')}
                  style={[styles.searchImg,focused?{tintColor:black}:{tintColor:grey}]}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: ({focused}) => (
              <MyTabBarLabel title={'Notification'} focused={focused} />
            ),
            tabBarIcon: ({color, size}) => (
              <Ionicons name="notifications" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: ({focused}) => (
              <MyTabBarLabel title={'Profile'} focused={focused} />
            ),
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function MyTabBarLabel(props) {
  console.log(props);
  return (
    <Text
      style={[
        styles.tabBarLabel,
        props.focused ? styles.tabBarLabelActive : styles.tabBarLabelInactive,
      ]}>
      {props.title}
    </Text>
  );
}

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 15,
    textAlign: 'center',
  },
  tabBarLabelActive: {
    color: GlobalStyles.colorCodes.black,
  },
  tabBarLabelInactive: {
    color: GlobalStyles.colorCodes.grey,
  },
  searchImg: {
    width: 18,
    height: 18,
    
    alignContent: 'center',
  },
  searchCircle: {
    position: 'absolute',
    bottom: 5,
    height: 56,
    width: 56,
    borderRadius: 56,
    backgroundColor: GlobalStyles.colorCodes.lightyellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainRoute;