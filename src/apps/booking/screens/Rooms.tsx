import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from '../components/Footer';
import { getAllRooms, getSiteConfigurations } from '../services/DataService';
import { Room, Site_Configurations } from '../services/bucket';

export default function Rooms({ navigation }: any) {

    const [rooms, setRooms] = useState<Room[]>([])
    const [siteConfigurations, setSiteConfigurations] = useState<Site_Configurations[]>([])
    const [loading,setLoading]= useState(true)

    useEffect(() => {
        const request = async () => {
            await getAllRooms().then(res => {
                setRooms(res as Room[])
            })
            await getSiteConfigurations().then(res => {
                setSiteConfigurations(res as Site_Configurations[])
            })
            setLoading(false)
        }
        request()
    }, [])

    return (
       <View>
           {!loading? <ScrollView style={styles.mainBox}>
            <Image style={{ width: '100%', height: 220 }} source={{ uri: siteConfigurations[0]?.homepage?.header }} />
            <Text style={{textAlign:'center',paddingHorizontal:20,marginTop:10}}>Start by exploring the details of your dream vacation in our rooms.</Text>
            <Text style={styles.title}>Rooms & Suits</Text>
            {rooms.map((room, index) => {
                return <View key={index} style={{ marginVertical: 20 }}>
                    <Image style={{ width: '100%', height: 220 }} source={{ uri: room.head_image }} />
                    <View style={styles.roomTextAndButton}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.roomText}>{room.name}</Text>
                        <Pressable style={styles.pressable} onPress={() => { navigation.navigate('Details', { room }) }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Explore <Ionicons name='arrow-forward-outline' /></Text>
                        </Pressable>
                    </View>
                </View>
            })}
            <Footer />
        </ScrollView>:<ActivityIndicator style={{marginVertical:'50%'}} size="large" color="#0000ff" />}
       </View>
    );
}

const styles = StyleSheet.create({
    mainBox: {
        width: '100%',
        padding: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        color: 'black',
        margin: 10
    },
    roomTextAndButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10
    },
    roomText: {
        fontSize: 18,
        width: '58%',
    },
    pressable: {
        borderWidth: 1,
        alignItems: 'center',
        height: 50,
        borderColor: '#dcdcdc',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        width: '39%'
    }
});