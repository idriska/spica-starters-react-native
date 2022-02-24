import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProductDetails from '../screens/product-details/ProductDetails';
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
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default ECommerceStackNavigator;
