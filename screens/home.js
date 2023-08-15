import React, { useState } from 'react'
import {StyleSheet, Text, View,FlatList, TouchableOpacity,ImageBackground, Modal } from 'react-native';
import { globalStyles } from '../styles/globalstyles';
import {MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/cards';
import Form from './form';



export default function Home({ navigation }) {
    const [review, setReview] = useState([
        { title: 'Fast and Furious 10', rating: 3, body: 'Come out in 2023', key: '1' },
        { title: 'Fast and Furious 9', rating: 4, body: 'Come out in 2022', key: '2' },
        { title: 'Fast and Furious 8', rating: 5, body: 'Come out in 2021', key: '3' },
        {title: 'Fast and Furious 7', rating: 1, body:'Come out in 2020', key: '4'},
    ])

    const [open, setOpen]= useState(false)

    return (
        <ImageBackground source={require('../assets/game_bg.png')} styles={globalStyles.container}>

            <Modal visible={open} animationType='fade'>
                <View style={styles.modal}>
                    <Text><Form /></Text>
                </View>
                <MaterialIcons
                name='close'
                size={24}
                color='#000'
                style={styles.ModalToggle}
                onPress={()=> setOpen(false)}
            />
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                color='#000'
                style={styles.ModalToggle}
                onPress={()=> setOpen(true)}
            />
            <FlatList data={review} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("Review", item)}>
                    <View style={globalStyles.wrapper}>
                    <Card>
                        <Text style={globalStyles.title}>{item.title}</Text>
                   </Card>
                    </View>
                </TouchableOpacity>
            )} />
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    modal: {
        alignItems:'center',
        flex: 1,
         
    },
    ModalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 10,
        padding:5,
    }
})
