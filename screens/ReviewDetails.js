import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/globalstyles';
import Card from '../shared/cards';


export default function Review({ route }) {
    const {title, rating, body} = route.params

    return (
        <View style={globalStyles.container}>
            <Card>
            <Text style={globalStyles.paragraph}>Title: {title}</Text>
            <Text style={globalStyles.paragraph}>Description: {body}</Text>
                <View style={styles.ratings}>
                    <Text>Rating</Text>
                    <Image source={require('../assets/heart-2.png')} />
                    <Image source={ require('../assets/heart-2.png')} />
                    <Image source={require('../assets/heart-2.png')} />
                    <Image source={ require('../assets/heart-2.png')} />
            </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    ratings: {
        padding: 2,
        flexDirection:'row',
        
    },
   
})