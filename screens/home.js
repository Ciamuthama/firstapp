import React, { useState } from 'react'
import { Text, View,FlatList, TouchableOpacity,ImageBackground } from 'react-native';
import { globalStyles } from '../styles/globalstyles';
import Card from '../shared/cards';



export default function Home({ navigation }) {
    const [review, setReview] = useState([
        { title: 'Fast and Furious 10', rating: 3, body: 'Come out in 2023', key: '1' },
        { title: 'Fast and Furious 9', rating: 4, body: 'Come out in 2022', key: '2' },
        { title: 'Fast and Furious 8', rating: 5, body: 'Come out in 2021', key: '3' },
        {title: 'Fast and Furious 7', rating: 1, body:'Come out in 2020', key: '4'},
    ])

    return (
        <ImageBackground source={require('../assets/game_bg.png')} styles={globalStyles.container}>
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
