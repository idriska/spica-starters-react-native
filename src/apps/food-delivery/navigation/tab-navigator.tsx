import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FoodDeliveryTabParams} from '../interfaces/interfaces';
import * as COLORS from '../../../styles/colors';
import Home from '../screens/home/Home';
import Basket from '../screens/basket/Basket';
import Profile from '../screens/profile/Profile';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {basketStore} from '../redux/store';
import FoodDeliveryProfileStackNavigator from './profile-stack-navigator';

const Tab = createBottomTabNavigator<FoodDeliveryTabParams>();

const FoodDeliveryTabNavigator = () => {
  const [basketItemsCount, setBasketItemsCount] = useState(0);
  useEffect(() => {
    const basketSub = basketStore.subscribe(() => {
      setBasketItemsCount(basketStore.getState().foods?.length);
    });
    return () => {
      basketSub();
    };
  }, []);

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
        name="Basket"
        component={Basket}
        options={{
          tabBarBadge: basketItemsCount > 0 ? basketItemsCount : undefined,
          tabBarIcon: ({color}) => (
            <Ionicons name="md-cart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={FoodDeliveryProfileStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="user-circle-o" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default FoodDeliveryTabNavigator;
