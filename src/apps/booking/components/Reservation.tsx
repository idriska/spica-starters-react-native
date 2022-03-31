import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Button, Modal, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Reservation() {

    const [selectedRoom, setSelectedRoom] = useState('standart');
    const [checkIn, setCheckIn] = useState(new Date())
    const [checkInShow, setCheckInShow] = useState(false)

    const [checkOut, setCheckOut] = useState(checkIn)
    const [checkOutShow, setCheckOutShow] = useState(false)



    const setCheckInFunc = (date: any) => {
        if (date) {
            setCheckIn(new Date(date))
        }
    }
    const setCheckOutFunc = (date: any) => {
        if (date) {
            setCheckOut(new Date(date))
        }
    }

    const adultChange = (e: any) => {
        console.log(e);

        e.replace(/[^0-9]/g, '')

    }

    return (
        <View style={styles.mainBox}>
            <Text style={styles.title}>Reservation</Text>
            <View >
                <TextInput style={styles.input} placeholder='Your Name' />
                <TextInput style={styles.input} placeholder='Email' />
                <TextInput style={styles.input} placeholder='Phone' />
                <TextInput style={styles.input} placeholder='Adult' onChangeText={(e) => { adultChange(e) }} />
                <TextInput style={styles.input} placeholder='Child' />
                <View style={styles.dateBox}>
                    <Pressable onPress={() => setCheckInShow(!checkInShow)} style={{ width: '49%', marginRight: '2%' }}>
                        <TextInput editable={false} style={styles.dateInput} placeholder={checkIn ? (checkIn.toDateString()) : 'Check in'} />
                    </Pressable>
                    <Pressable onPress={() => setCheckOutShow(!checkOutShow)} style={{ width: '49%' }}>
                        <TextInput editable={false} style={styles.dateInput} placeholder={checkOut ? (checkOut.toDateString()) : 'Check Out'} />
                    </Pressable>
                </View>
                <View style={styles.roomPicker}>
                    <Picker
                        selectedValue={selectedRoom}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedRoom(itemValue)
                        }>
                        <Picker.Item label="Standart" value="standart" />
                        <Picker.Item label="Family Suit" value="familysuit" />
                    </Picker>
                </View>
                {/* <Button title='Make A Reservation' onPress={() => setCheckInShow(!checkInShow)} ></Button> */}
                <Pressable style={styles.button}>
                    <Text style={{color:'white',fontWeight:'700'}}>Make A Reservation</Text>
                </Pressable>

                {checkInShow && (
                    <DateTimePicker onChange={(e) => {
                        setCheckInShow(!checkInShow); setCheckInFunc(e.nativeEvent.timestamp);
                    }} value={checkIn} minimumDate={checkIn} />
                )}

                {checkOutShow && (
                    <DateTimePicker onChange={(e) => {
                        setCheckOutShow(!checkOutShow); setCheckOutFunc(e.nativeEvent.timestamp);
                    }} value={checkOut} minimumDate={checkIn} />
                )}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    mainBox: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 6,
        marginTop: 10,
        paddingHorizontal: 12
    },
    dateBox: {
        display: 'flex',
        flexDirection: 'row',
    },
    dateInput: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#dcdcdc',
        paddingHorizontal: 12
    },
    button: {
        height: 50,
        marginTop: 10,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 6
    },
    roomPicker: {
        borderColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 10
    }
})