import React from 'react'
import RoomDetails from '../screens/RoomDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawerfunc from './Drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'

const Stack = createNativeStackNavigator();


export default function Navigator() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='drawer'>
                <Stack.Screen options={{ headerShown: false }} name="drawer" component={Drawerfunc} />
                <Stack.Screen name="Details" component={RoomDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}