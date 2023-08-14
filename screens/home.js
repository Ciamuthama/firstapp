import React, { useState } from 'react'
import { Text, View,FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalstyles';
import Card from '../shared/cards';



export default function Home({ navigation }) {
    const [review, setReview] = useState([
        { title: 'Fast and Furious 10', rating: 4.5, body: 'Come out in 2023', key: '1' },
        { title: 'Fast and Furious 9', rating: 4.9, body: 'Come out in 2022', key: '2' },
        { title: 'Fast and Furious 8', rating: 5, body: 'Come out in 2021', key: '3' },
        {title: 'Fast and Furious 7', rating: 4.2, body:'Come out in 2020', key: '4'},
    ])

    return (
        <View styles={globalStyles.container}>
            <FlatList data={review} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("Review", item)}>
                    <View style={globalStyles.wrapper}>
                    <Card>
                        <Text style={globalStyles.title}>{item.title}</Text>
                   </Card>
                    </View>
                </TouchableOpacity>
            )} />
            
        </View>
    )
}
