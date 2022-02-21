import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ECommerce from '../apps/e-commerce';
import FitnessApp from '../apps/fitness-app';
import {MainStackParam} from '../interfaces/interfaces';
import App from '../App';
import FoodDeliveryTabNavigator from '../apps/food-delivery/navigation/tab-navigator';
import {SpicaProjectsMenu} from '../spica-components';
import AppointmnetStackNavigator from '../apps/appointment/navigation/stack-navigation';

const Stack = createNativeStackNavigator<MainStackParam>();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="App" component={App} />
        <Stack.Screen
          name="FoodDelivery"
          component={FoodDeliveryTabNavigator}
        />
        <Stack.Screen name="FitnessApp" component={FitnessApp}/>
        <Stack.Screen name="ECommerce" component={ECommerce} />
        <Stack.Screen name="Appointment" component={AppointmnetStackNavigator} />
      </Stack.Navigator>
      <SpicaProjectsMenu />
    </NavigationContainer>
  );
};
export default MainStackNavigator;
