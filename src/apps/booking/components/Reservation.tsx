import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Button, Alert } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { makeReservation, getAllRooms } from '../services/DataService';
import { Room } from '../services/bucket';

export default function Reservation() {

    const [rooms, setRooms] = useState<Room[]>([])
    const [selectedRoom, setSelectedRoom] = useState(rooms[0]?._id);
    const [loading,setLoading]= useState(false)
    const { control, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            mail: "",
            phone_number: "",
            adult: "",
            children: ""
        }
    });
    const [checkIn, setCheckIn] = useState(new Date())
    const [checkInShow, setCheckInShow] = useState(false)

    const [checkOut, setCheckOut] = useState(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000))
    const [checkOutShow, setCheckOutShow] = useState(false)

    const [reservation, setReservation] = useState(
        {
            name: "",
            mail: "",
            phone_number: "",
            adult: Number(),
            children: Number(),
            check_in: new Date,
            check_out: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
            room: rooms[0]?._id
        }
    )
    useEffect(() => {
        const diffDays =(Number(checkOut) - Number(checkIn) )/( 24 * 60 * 60 * 1000)
        if(diffDays<2){
            setCheckOutFunc(new Date(Number(checkIn) + 2 * 24 * 60 * 60 * 1000))    
        }

    }, [checkIn,checkOut])

    const setCheckInFunc = (date: any) => {
        if (date) {
            setCheckIn(new Date(date))
            setReservation(prev=>{return { ...prev, check_in: (new Date(date)) }})
        }
    }
    const setCheckOutFunc = (date: any) => {
        if (date) {
            setCheckOut(new Date(date))
            setReservation(prev =>{return { ...prev, check_out: (new Date(date)) }})
        }
    }

    useEffect(() => {
        getAllRooms().then(res => {
            setRooms(res as Room[])
        })
    }, [])

    const onSubmit = async (data: any) => { 
        setLoading(true)
        data.adult = Number(data.adult)
        data.children = Number(data.children)
        await makeReservation({...reservation,...data})
        reset({name:'',phone_number:'',adult:'',mail:'',children:''})
        Alert.alert('Reservation Created')
        setLoading(false)
    }

    return (
        <View style={styles.mainBox}>
            <Text style={styles.title}>Reservation</Text>
            <View >
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur,value} }) => (
                        <TextInput
                            style={styles.input}
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            placeholder="Your Name"
                        />
                    )}
                    name="name"
                />
                {errors.name && <Text style={styles.error}>This is required.</Text>}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                    }}
                    render={({ field: { onChange, onBlur,value } }) => (
                        <TextInput
                            style={styles.input}
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            placeholder="Mail"
                        />
                    )}
                    name="mail"
                />
                {errors.mail && <Text style={styles.error}>Must be valid.</Text>}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        pattern: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
                    }}
                    render={({ field: { onChange, onBlur,value } }) => (
                        <TextInput
                            style={styles.input}
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            placeholder="Phone"
                        />
                    )}
                    name="phone_number"
                />
                {errors.phone_number && <Text style={styles.error}>Must be valid.</Text>}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        pattern: /^[0-9]*$/,
                        minLength:1,
                        min:0
                    }}
                    render={({ field: { onChange, onBlur,value } }) => (
                        <TextInput
                            style={styles.input}
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            placeholder="Adult"
                            keyboardType='number-pad'
                        />
                    )}
                    name="adult"
                />
                {errors.adult && <Text style={styles.error}>This is required.</Text>}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        pattern: /^[0-9]*$/,
                        min:0,
                        minLength:1
                    }}
                    render={({ field: { onChange, onBlur,value } }) => (
                        <TextInput
                            style={styles.input}
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            placeholder="Children"
                            keyboardType='number-pad'
                        />
                    )}
                    name="children"
                />
                {errors.children && <Text style={styles.error}>This is required.</Text>}
                <View style={styles.dateBox}>
                    <Pressable onPress={() => setCheckInShow(!checkInShow)} style={{ width: '49%', marginRight: '2%' }}>
                        <TextInput editable={false} style={styles.dateInput} placeholder={checkIn ? (checkIn.toDateString()) : 'Check in'} />
                    </Pressable>
                    <Pressable onPress={() => setCheckOutShow(!checkOutShow)} style={{ width: '49%' }}>
                        <TextInput editable={false} style={styles.dateInput} placeholder={checkOut ? (checkOut.toDateString()) : 'Check Out'} />
                    </Pressable>
                </View>
                <View style={{...styles.roomPicker,marginBottom:10}}>
                    <Picker
                        selectedValue={selectedRoom}
                        onValueChange={(itemValue) => { setSelectedRoom(itemValue); setReservation({ ...reservation, room: itemValue }) }
                        }>
                        {rooms.map((room, index) => {
                            return <Picker.Item key={index} label={room.name} value={room._id} />
                        })}
                    </Picker>
                </View>
                {checkInShow && (
                    <DateTimePicker onChange={(e) => {
                        setCheckInShow(!checkInShow); setCheckInFunc(e.nativeEvent.timestamp);
                    }} value={checkIn} minimumDate={new Date(Date.now())} />
                )}

                {checkOutShow && (
                    <DateTimePicker onChange={(e) => {
                        setCheckOutShow(!checkOutShow); setCheckOutFunc(e.nativeEvent.timestamp);
                    }} value={checkOut} minimumDate={new Date(Number(checkIn) + 2 * 24 * 60 * 60 * 1000)} />
                )}
                <Button disabled={loading} title='Make A Reservation' onPress={handleSubmit(onSubmit)} />
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
    roomPicker: {
        borderColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 10
    },
    error: {
        color: 'red',
        marginLeft: 2,
        fontSize: 10
    }
})