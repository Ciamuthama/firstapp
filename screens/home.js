import React, { useState } from 'react'
import {StyleSheet, Text, View,FlatList, TouchableOpacity,ImageBackground, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/globalstyles';
import {MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/cards';
import Form from './form';



export default function Home({ navigation }) {
    const [review, setReview] = useState([
        { title: 'Fast and Furious 10', Rating: 3, Body: 'Come out in 2023', key: '1' },
        { title: 'Fast and Furious 9', Rating: 4, Body: 'Come out in 2022', key: '2' },
        { title: 'Fast and Furious 8', Rating: 5, Body: 'Come out in 2021', key: '3' },
        {title: 'Fast and Furious 7', Rating: 1, Body:'Come out in 2020', key: '4'},
    ])

    const onReview = (review) => {
        review.key = Math.round().toString()
        setReview((currentReview) => [review, ...currentReview])
        setOpen(false)
    }

    const [open, setOpen]= useState(false)

    return (
        <ImageBackground source={require('../assets/game_bg.png')} styles={globalStyles.container}>

            <Modal visible={open} animationType='fade'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss  }>

                <View style={styles.modal}>
                <MaterialIcons
                name='close'
                size={24}
                color='#000'
                style={styles.ModalToggle}
                onPress={()=> setOpen(false)}
                />
                <Text><Form onReview={ onReview} /></Text>
                </View>
                </TouchableWithoutFeedback>
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
