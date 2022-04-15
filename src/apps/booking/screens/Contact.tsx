import React, { useEffect, useState } from "react";
import { Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from "../components/Footer";
import { Site_Configurations } from "../services/bucket";
import { getSiteConfigurations } from "../services/DataService";

export default function Contact() {

    const [siteConfigurations, setSiteConfigurations] = useState<Site_Configurations[]>([])
    useEffect(() => {
        getSiteConfigurations().then(res => {
            setSiteConfigurations(res as Site_Configurations[])
        })
    }, [])

    return (
        <ScrollView style={styles.mainBox}>
            <MapView
                style={styles.map}
                initialRegion={{
                    longitude:Number(siteConfigurations[0]?.contact?.adress_map?.coordinates[1]),
                    latitude: Number(siteConfigurations[0]?.contact?.adress_map?.coordinates[0]),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: Number(siteConfigurations[0]?.contact?.adress_map?.coordinates[1]),
                        longitude: Number(siteConfigurations[0]?.contact?.adress_map?.coordinates[0]),
                    }} />
            </MapView>

            <View style={{ backgroundColor: '#1f1f1f', marginTop: 20 }}>
                <Text style={styles.title}>Contact Us</Text>
                <View style={styles.options}>
                    <View style={styles.icon} >
                        <Ionicons size={24} name='business-outline' />
                    </View>
                    <Text style={styles.subTitle}>Be Our Guest</Text>
                    <Text style={styles.contentText}>{siteConfigurations[0]?.contact?.adress}</Text>
                </View>
                <View style={styles.options}>
                    <View style={styles.icon} >
                        <Ionicons size={24} name='logo-whatsapp' />
                    </View>
                    <Text style={styles.subTitle}>Whatsapp</Text>
                    <Text style={styles.contentText}>{siteConfigurations[0]?.contact?.phone_number}</Text>
                </View>
                <View style={styles.options}>
                    <View style={styles.icon} >
                        <Ionicons size={24} name='ios-call-outline' />
                    </View>
                    <Text style={styles.subTitle}>Call Us</Text>
                    <Text style={styles.contentText}>{siteConfigurations[0]?.contact?.phone_number}</Text>
                </View>
                <View style={styles.options}>
                    <View style={styles.icon} >
                        <Ionicons size={24} name='md-mail-open-outline' />
                    </View>
                    <Text style={styles.subTitle}>Write Us</Text>
                    <Text style={styles.contentText}>{siteConfigurations[0]?.contact?.mail}</Text>
                </View>
                <View style={styles.media}>
                    <Ionicons size={46} name='logo-facebook' onPress={()=>{Linking.openURL(`${siteConfigurations[0]?.contact?.facebook_link}`)}}/>
                    <Ionicons size={46} name='logo-instagram' onPress={()=>{Linking.openURL(`${siteConfigurations[0]?.contact?.instagram_link}`)}}/>
                </View>
            </View>
            <Footer />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainBox: {
        width: '100%',
        padding: 10,
    },
    map: {
        width: '100%',
        height: 220
    },
    title: {
        fontSize: 26,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
        borderBottomWidth: 2,
        borderColor: '#4B4B4B',
        paddingVertical: 10
    },
    options: {
        alignItems: 'center',
        marginBottom: 20
    },
    icon: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 25,
        marginTop: 20
    },
    subTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    contentText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 13,
        paddingHorizontal: 20
    },
    media: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 46
    }
});