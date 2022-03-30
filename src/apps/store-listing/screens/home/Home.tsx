import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { getPlaces } from '../../services/DataService'
import { Place } from '../../services/bucket';
const Stack = createNativeStackNavigator();

import StoreCard from '../../components/StoreCard.';
import StoreDetails from '../store-details/StoreDetails';


const Home = ({ navigation }: any) => {

    const [places, setPlaces] = useState<Place[]>([])

    const getPlacesFunc = async () => {

        getPlaces().then(res => {
            setPlaces(res as Place[])

        })
    }
    useEffect(() => {
        getPlacesFunc()
    }, [])

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Store Listing</Text>
            </View>
            <ScrollView style={{marginBottom:50}}>
                {places.map(el => {
                    return <StoreCard store={el} navigation={navigation} key={el._id} />
                })}
            </ScrollView>
            {/* <StoreCard /> */}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        borderBottomWidth: 1
    },
    headerText: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '700'
    }
})