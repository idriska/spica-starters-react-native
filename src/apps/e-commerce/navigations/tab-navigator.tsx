import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ECommerceTabParams} from '../interfaces/interfaces';
import * as COLORS from '../../../styles/colors';
import Home from '../screens/home/Home';
import Basket from '../screens/basket/Basket';
import Profile from '../screens/profile/Profile';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Category from '../screens/category/Category';
import Favorite from '../screens/favorite/Favorite';

const Tab = createBottomTabNavigator<ECommerceTabParams>();

const ECommerceTabNavigator = () => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        lazy: true,
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.HELPER_GRAY,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="apps" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="md-cart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="heart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="user-circle-o" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ECommerceTabNavigator;
