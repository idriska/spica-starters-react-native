import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Reservation from '../components/Reservation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from '../components/Footer';
import { getRooms, getActivities, getSiteConfigurations, makeReservation } from '../services/DataService';
import { Room, Activities, Site_Configurations } from '../services/bucket';

export default function Home({ navigation }: any) {
    const [rooms, setRooms] = useState<Room[]>([])
    const [activities, setActivities] = useState<Activities[]>([])
    const [siteConfigurations, setSiteConfigurations] = useState<Site_Configurations[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const request = async () => {
            await getRooms().then(res => {
                setRooms(res as Room[])
            })
            await getActivities().then(res => {
                setActivities(res as Activities[])
            })
            await getSiteConfigurations().then(res => {
                setSiteConfigurations(res as Site_Configurations[])
            })
            setLoading(!loading)
        }
        request()
    }, [])

    return (
        <ScrollView style={styles.mainBox}>
            {loading ? <ActivityIndicator style={{marginVertical:'auto'}} size="large" color="#0000ff" /> : <View><View>
                <ScrollView nestedScrollEnabled={true} pagingEnabled style={{ width: '100%', height: 200 }}>
                    {siteConfigurations[0]?.homepage?.slides?.map((slide, index) => {
                        return <Image key={index} style={{ height: 200 }} source={{ uri: slide }} />
                    })}
                </ScrollView>
            </View>
                <Reservation />
                <View>
                    <Text style={styles.title}>Rooms & Suits</Text>
                    {rooms.map((room, index) => {
                        return (
                            <View key={index} style={{ backgroundColor: '#dcdcdc40', marginBottom: 10 }}>
                                <Image style={{ height: 200 }} source={{ uri: room.head_image }} />
                                <Text style={styles.header}>{room.name}</Text>
                                <Text style={styles.description}>{room.description}</Text>
                                <Pressable style={styles.pressable} onPress={() => { navigation.navigate('Details', { room }) }}>
                                    <Text style={{ fontSize: 20, fontWeight: '700' }}>Explore <Ionicons name='arrow-forward-outline' /></Text>
                                </Pressable>
                            </View>
                        );
                    })}

                </View>
                <View>
                    <Text style={styles.title}>Activity & Fun</Text>
                    <ScrollView nestedScrollEnabled={true} pagingEnabled style={{ width: '100%', height: 300 }}>
                        {activities.map((activity, index) => {
                            return (
                                <View key={index} style={{ height: 300 }}>
                                    <Image style={{ height: 200 }} source={{ uri: activity.images[0] }} />
                                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700', marginVertical: 10 }}>{activity.name}</Text>
                                    <Text numberOfLines={2} style={{ textAlign: 'center' }}>{activity.description}</Text>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
                <View>
                    <Text style={styles.title}>About Us</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 30 }}>{siteConfigurations[0]?.about}</Text>
                </View>
                <Footer /></View>}
            {/* <View>
                <ScrollView nestedScrollEnabled={true} pagingEnabled style={{ width: '100%', height: 200 }}>
                    {siteConfigurations[0]?.homepage?.slides?.map((slide, index) => {
                        return <Image key={index} style={{ height: 200 }} source={{ uri: slide }} />
                    })}
                </ScrollView>
            </View>
            <Reservation />
            <View>
                <Text style={styles.title}>Rooms & Suits</Text>
                {rooms.map((room, index) => {
                    return (
                        <View key={index} style={{ backgroundColor: '#dcdcdc40', marginBottom: 10 }}>
                            <Image style={{ height: 200 }} source={{ uri: room.head_image }} />
                            <Text style={styles.header}>{room.name}</Text>
                            <Text style={styles.description}>{room.description}</Text>
                            <Pressable style={styles.pressable} onPress={() => { navigation.navigate('Details', { room }) }}>
                                <Text style={{ fontSize: 20, fontWeight: '700' }}>Explore <Ionicons name='arrow-forward-outline' /></Text>
                            </Pressable>
                        </View>
                    );
                })}

            </View>
            <View>
                <Text style={styles.title}>Activity & Fun</Text>
                <ScrollView nestedScrollEnabled={true} pagingEnabled style={{ width: '100%', height: 300 }}>
                    {activities.map((activity, index) => {
                        return (
                            <View key={index} style={{ height: 300 }}>
                                <Image style={{ height: 200 }} source={{ uri: activity.images[0] }} />
                                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700', marginVertical: 10 }}>{activity.name}</Text>
                                <Text numberOfLines={2} style={{ textAlign: 'center' }}>{activity.description}</Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
            <View>
                <Text style={styles.title}>About Us</Text>
                <Text style={{ textAlign: 'center', marginBottom: 30 }}>{siteConfigurations[0]?.about}</Text>
            </View>
            <Footer /> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainBox: {
        width: '100%',
        height: '100%',
        padding: 10
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    header: {
        textAlign: 'center',
        fontSize: 17,
        width: '60%',
        marginHorizontal: '20%',
        fontWeight: '700',
        marginTop: 10
    },
    description: {
        textAlign: 'center',
        width: '80%',
        marginHorizontal: '10%',
        marginBottom: 10
    },
    pressable: {
        borderWidth: 1,
        width: '40%',
        alignItems: 'center',
        marginHorizontal: '30%',
        height: 50,
        borderColor: '#dcdcdc',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 10
    }
})
