import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Products from '../screens/products/Products';
import ECommerceTabNavigator from './tab-navigator';

const Stack = createNativeStackNavigator();

const ECommerceStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ECommerceTabNavigator"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="ECommerceTabNavigator"
        component={ECommerceTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
};

export default ECommerceStackNavigator;
