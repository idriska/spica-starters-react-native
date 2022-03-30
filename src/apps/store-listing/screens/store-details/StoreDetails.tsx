import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
function StoreDetails({route,navigation}:any) {

    const [activeIndex, setActiveIndex] = useState<string>('info');
    const { store } = route.params;
    navigation.setOptions({ title: store.name })
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ];

    return (
        <View style={styles.container}>
            <View style={styles.segmentBox}>
                <TouchableOpacity
                    onPress={() => setActiveIndex('info')}
                    style={[
                        activeIndex == 'info'
                            ? styles.activeSegmentBtn
                            : styles.deactiveSegmentBtn,
                    ]}>
                    <Text
                        style={[
                            styles.segmentText,
                            activeIndex == 'info' && styles.activeSegmentText,
                        ]}>
                        Info
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setActiveIndex('gallery')}
                    style={[
                        activeIndex == 'gallery'
                            ? styles.activeSegmentBtn
                            : styles.deactiveSegmentBtn,
                    ]}>
                    <Text
                        style={[
                            styles.segmentText,
                            activeIndex == 'gallery' && styles.activeSegmentText,
                        ]}>
                        Gallery
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setActiveIndex('map')}
                    style={[
                        activeIndex == 'map'
                            ? styles.activeSegmentBtn
                            : styles.deactiveSegmentBtn,
                    ]}>
                    <Text
                        style={[
                            styles.segmentText,
                            activeIndex == 'map' && styles.activeSegmentText,
                        ]}>
                        Map
                    </Text>
                </TouchableOpacity>
            </View>





            {activeIndex === 'info' &&
                <View style={{ padding: 10 }}>
                    <Text style={{ marginBottom: 10 }}>{store.description}</Text>
                    <Text><Text style={{ fontWeight: '800' }}>Phone:</Text>  {store.phone}</Text>
                    <Text><Text style={{ fontWeight: '800' }}>Email:</Text>  {store.mail}</Text>
                    <Text><Text style={{ fontWeight: '800' }}>Address:</Text>   {store.adress}</Text>
                    <View style={{ borderTopWidth: 2, borderBottomWidth: 2, padding: 14, marginTop: 20, marginBottom: 20 }}>
                        <Text style={{ textAlign: 'center', fontWeight: '800' }}>Working Hours</Text>
                    </View>
                    {store.working_hours.length && store.working_hours.map((el,index)=>{
                        return <Text key={index} style={{ textAlign: 'center' }}><Text style={{ fontWeight: '800' }}>{days[index]}:</Text>  {store.working_hours[index].hours[0].from + ' - ' +
                        store.working_hours[index].hours[0].until}</Text>
                    })}

                </View>
            }

            {activeIndex === 'gallery' &&
                <View style={{ width: '100%' }}>
                    <ScrollView pagingEnabled style={{ width: '100%', height: 200 }} >
                        {store.images.map((img, index) => {
                            return (
                                <Image
                                    key={index}
                                    source={{ uri: img }}
                                    style={{ width: '100%', height: 200 }}
                                />
                            )
                        })}
                    </ScrollView>
                </View>
            }

            {activeIndex === 'map' &&
                <View style={{ width: '100%' }}>
                    <MapView
                        style={{ width: '100%', height: 200 }}
                        initialRegion={{
                            latitude: store.location.coordinates[1],
                            longitude: store.location.coordinates[0],
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                    >
                        <Marker coordinate={{
                            latitude: store.location.coordinates[1],
                            longitude: store.location.coordinates[0]
                        }} />
                    </MapView>
                </View>
            }

        </View>
    )
}

export default StoreDetails;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    segmentBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#f6f6f6',
        marginBottom: 3,
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        height: 60
    },
    activeSegmentBtn: {
        flex: 1 / 2,
        alignItems: 'center',
        padding: 7,
        borderBottomWidth: 2,
        borderBottomColor: '#07074b',
        backgroundColor: '#eee',
    },
    deactiveSegmentBtn: {
        flex: 1 / 2,
        alignItems: 'center',
        padding: 7,
    },
    segmentText: {
        fontSize: 20,
        color: 'gray',
    },
    activeSegmentText: {
        color: '#07074b',
    },
    segmentSection: {
        width: '100%',
    },
})