import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Footer from '../components/Footer';

export default function RoomDetails({route,navigation}:any) {

    const { room } = route.params;
    navigation.setOptions({ title: room.name })
    const [mainImage, setMainImage] = useState(room.head_image)

    return (
        <ScrollView style={{padding:5}}>
            <Image style={{ width: '100%', height: 220 }} source={{ uri: mainImage }} />
            <ScrollView horizontal>
                {room.images.map((image,index) => {
                    return (
                        <Pressable key={index} onPress={()=>{setMainImage(image)}}>
                            <Image style={styles.miniImage} source={{ uri: image }} />
                        </Pressable>
                    )
                })}
            </ScrollView>
            <Text style={styles.title}>{room.name}</Text>
            <Text style={styles.contentText}>{room.description}</Text>
            <Text style={styles.title}>Features</Text>
            <View style={styles.features}>
                {room.properties.map((el,index)=>{
                    return <Text key={index} style={styles.feature}>{el.name}</Text>
                })}
            </View>
            <Footer />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    miniImage:{
        width:90,
        height:90,
        marginTop:5,
        marginRight:5
    },
    title:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'700',
        color:'black',
        marginVertical:20
    },
    contentText:{
        color:'black',
        textAlign:'center',
        fontSize:14,
        paddingHorizontal:20
    },
    features:{
        alignItems:'center',
        borderWidth:2,
        borderColor:'#dcdcdc',
        padding:5,
        marginBottom:10,
        backgroundColor:'#f6f6f6',
        borderRadius:6
    },
    feature:{
        color:'#535151',
        fontSize:14,
        fontWeight:'700'
    }
});