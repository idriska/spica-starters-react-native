import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Button, Modal, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { makeReservation, getAllRooms } from '../services/DataService';
import { Room } from '../services/bucket';

export default function Reservation() {

    const [rooms, setRooms] = useState<Room[]>([])
    const [selectedRoom, setSelectedRoom] = useState(rooms[0]?._id);
    const [checkIn, setCheckIn] = useState(new Date())
    const [checkInShow, setCheckInShow] = useState(false)

    const [checkOut, setCheckOut] = useState(checkIn)
    const [checkOutShow, setCheckOutShow] = useState(false)
    const [validation, setValidation] = useState({
        name: false,
        mail: false,
        phone_number: false,
        adult: false,
        children: false,
    })

    const [reservation, setReservation] = useState(
        {
            name: "a",
            mail: "",
            phone_number: "",
            adult: Number(),
            children: Number(),
            check_in: new Date,
            check_out: new Date,
            room: rooms[0]?._id
        }
    )

    const setCheckInFunc = (date: any) => {
        if (date) {
            setCheckIn(new Date(date))
            setReservation({ ...reservation, check_in: (new Date(date)) })
        }
    }
    const setCheckOutFunc = (date: any) => {
        if (date) {
            setCheckOut(new Date(date))
            setReservation({ ...reservation, check_out: (new Date(date)) })
        }
    }
    const validations = ({mail,name,phone_number,adult,children}:any) => {
        const mailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;        
        const phoneVal = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;        
        console.log('_--------------');
                
        // setTimeout(()=>{
            if (!mail || mail) {
                if(mailVal.test(mail) === false){
                    setValidation(prev=>{return{...prev,mail:true}})
                }
                else {
                    setValidation(prev=>{return{...prev,mail:false}})
                }
            }
            if (!name || name) {
                if(name.length){
                    setValidation(prev=>{return{...prev,name:false}})
                }
                else {
                    setValidation(prev=>{return{...prev,name:true}})
                }
            }
            if (!adult || adult) {
                if(adult>=1){
                    setValidation(prev=>{return{...prev,adult:false}})
                }
                else {
                    setValidation(prev=>{return{...prev,adult:true}})
                }
            }
            if (!children || children) {
                if(children>=1){
                    setValidation(prev=>{return{...prev,children:false}})
                }
                else {
                    setValidation(prev=>{return{...prev,children:true}})
                }
            }
            if (!phone_number || phone_number) {
                if(phoneVal.test(phone_number) === false){
                    setValidation(prev=>{return{...prev,phone_number:true}})
                }
                else {
                    setValidation(prev=>{return{...prev,phone_number:false}})
                }
            }
        // },800)
        
        console.log("RES", reservation, validation)
        // setTimeout(()=>{
            if(validation.adult||validation.children||validation.mail||validation.name||validation.phone_number){
                // makeReservation(reservation)
                Alert.alert('SAA')
            }
        // },2000)
    }
    
    const reservationFunc = () => {
        if(!reservation.adult&&!reservation.check_in&&!reservation.check_out&&!reservation.children&&!reservation.mail&&!reservation.name&&!reservation.phone_number&&!reservation.room){
            // makeReservation(reservation)
        }
    }

    useEffect(() => {
        getAllRooms().then(res => {
            setRooms(res as Room[])
        })
        // validations(reservation)
    }, [])

    return (
        <View style={styles.mainBox}>
            <Text style={styles.title}>Reservation</Text>
            <View >
                <TextInput placeholderTextColor={validation.name?'red':'gray'} style={{...styles.input,borderColor:`${validation.name?'red':'#dcdcdc'}`}} placeholder='Your Name' onChangeText={(e) => { setReservation({ ...reservation, name: e }) }} />
                <TextInput placeholderTextColor={validation.mail?'red':'gray'} style={{...styles.input,borderColor:`${validation.mail?'red':'#dcdcdc'}`}} placeholder='mail' onChangeText={(e) => { setReservation({ ...reservation, mail: e })}} />
                <TextInput style={{...styles.input,borderColor:`${validation.phone_number?'red':'#dcdcdc'}`}} placeholder='Phone' onChangeText={(e) => { setReservation({ ...reservation, phone_number: e }) }} />
                <TextInput keyboardType = 'number-pad' style={{...styles.input,borderColor:`${validation.adult?'red':'#dcdcdc'}`}} placeholder='Adult' onChangeText={(e) => { setReservation({ ...reservation, adult: Number(e) }) }} />
                <TextInput keyboardType = 'number-pad' style={{...styles.input,borderColor:`${validation.children?'red':'#dcdcdc'}`}} placeholder='Child' onChangeText={(e) => { setReservation({ ...reservation, children: Number(e) }) }} />
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
                        onValueChange={(itemValue) => { setSelectedRoom(itemValue); setReservation({ ...reservation, room: itemValue }) }
                        }>
                        {rooms.map((room, index) => {
                            return <Picker.Item key={index} label={room.name} value={room._id} />
                        })}
                    </Picker>
                </View>
                <Pressable style={styles.button} onPress={() => { validations(reservation) }}>
                    <Text style={{ color: 'white', fontWeight: '700' }}>Make A Reservation</Text>
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
        backgroundColor:'#007AFF',
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