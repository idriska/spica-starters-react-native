import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppointmentTabParams} from '../interfaces/interfaces';
import * as COLORS from '../../../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Appointments from '../screens/appointments/Appointments';
import Clients from '../screens/clients/Clients';
import Profile from '../screens/profile/Profile';

const Tab = createBottomTabNavigator<AppointmentTabParams>();

const AppointmentTabNavigator = () => {

  return (
    <Tab.Navigator
      initialRouteName="Appointments"
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
        name="Appointments"
        component={Appointments}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Clients"
        component={Clients}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="md-cart" color={color} size={24} />
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

export default AppointmentTabNavigator;
