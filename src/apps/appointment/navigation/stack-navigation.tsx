import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppointmentStackParam} from '../interfaces/interfaces';
import Login from '../screens/login/Login';
import AppointmentTabNavigator from './tab-navigation';

const Stack = createNativeStackNavigator<AppointmentStackParam>();

const AppointmnetStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AppointmentTabNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AppointmentTabNavigator" component={AppointmentTabNavigator} />
    </Stack.Navigator>
  );
};

export default AppointmnetStackNavigator;
