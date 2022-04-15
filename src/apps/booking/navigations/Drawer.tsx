import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Contact from "../screens/Contact";
import Home from "../screens/Home";
import Rooms from "../screens/Rooms";

const Drawerm = createDrawerNavigator();


export default function Drawerfunc(){
    return(
        <Drawerm.Navigator initialRouteName="Home">
                <Drawerm.Screen name="Home" component={Home} />
                <Drawerm.Screen name="Rooms" component={Rooms} />
                <Drawerm.Screen name="Contact" component={Contact} />                
            </Drawerm.Navigator>
    );
}