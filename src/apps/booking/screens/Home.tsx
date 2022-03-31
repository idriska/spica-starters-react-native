import React from 'react';
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Reservation from '../components/Reservation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <ScrollView style={styles.mainBox}>
            <View style={{borderBottomWidth:2,borderColor:'#dcdcdc',marginBottom:20,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Ionicons name='menu' size={30} />
                <Image style={{height:40,width:40}} source={{uri:'https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61c1c3210ba24b002d19b538?alt=media'}} />
            </View>
            <View>
                <ScrollView pagingEnabled style={{ width: '100%', height: 200 }}>
                    <Image style={{ height: 200 }} source={{ uri: 'https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61c1c3210ba24b002d19b536?alt=media' }} />
                    <Image style={{ height: 200 }} source={{ uri: 'https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61c1c08d0ba24b002d19b46b?alt=media' }} />
                </ScrollView>
            </View>
            <Reservation />
            <View>
                <Text style={styles.title}>Rooms & Suits</Text>
                <View style={{ backgroundColor: '#dcdcdc40' }}>
                    <Image style={{ height: 200 }} source={{ uri: 'https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61c1c4db0ba24b002d19b60c?alt=media' }} />
                    <Text style={styles.header}>Standard Garden View Room</Text>
                    <Text style={styles.description}>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.</Text>
                    <Pressable style={styles.pressable}>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>Explore <Ionicons name='arrow-forward-outline' /></Text>
                    </Pressable>
                </View>

            </View>
            <View>
                <Text style={styles.title}>About Us</Text>
                <Text style={{ textAlign: 'center', marginBottom: 30 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet orci at fermentum euismod. Quisque quis erat nisl. Sed dapibus nec mauris tempor iaculis. Maecenas suscipit turpis velit, vel pretium sapien vulputate id. Sed vehicula dui et enim condimentum, in molestie lectus venenatis. Praesent a velit ut nulla vestibulum cursus id in ex. Maecenas tellus metus, sagittis eu ligula eget, mollis suscipit ex. Fusce a porta ipsum. Pellentesque nibh orci, commodo in purus ullamcorper, placerat consectetur lacus. Ut ornare hendrerit augue, lobortis mollis velit viverra ut.</Text>
            </View>
            <Footer />
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