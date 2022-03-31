import React from 'react';
import { Text, View } from 'react-native';

export default function Footer(){
    return(
        <View style={{padding:20,backgroundColor:'#1f1f1f'}}>
            <Text style={{textAlign:'center',color:'white'}}>Copyright © 2021 Booking Starter | Designed by TeknoDev</Text>
        </View>
    );
}