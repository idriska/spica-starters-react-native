import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import Home from "../screens/home/Home";
import StoreDetails from "../screens/store-details/StoreDetails";

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: true,
            }}>
            <Stack.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="details" component={StoreDetails} />
        </Stack.Navigator>
    );2
}

export default Navigator;