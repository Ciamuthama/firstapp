import React, { useState } from 'react'
import { Text, View,FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalstyles';


export default function Home({ navigation }) {
    const [review, setReview] = useState([
        { title: 'Fast 10', rating: 4.5, body: 'come out in 2023', key: '1' },
        { title: 'Fast 9', rating: 4.9, body: 'come out in 2022', key: '2' },
        { title: 'Fast 8', rating: 5, body: 'come out in 2021', key: '3' },
        {title: 'Fast 7', rating: 4.2, body:'come out in 2020', key: '4'},
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList data={review} renderItem={({ item }) => (
                <TouchableOpacity onPress={()=> navigation.navigate("Review", item)}>
                    <Text style={globalStyles.title}>{item.title}</Text>
                </TouchableOpacity>
           )}/>
        </View>
    )
}
