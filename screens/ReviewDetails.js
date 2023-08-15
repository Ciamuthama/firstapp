import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../styles/globalstyles';
import Card from '../shared/cards';


export default function Review({ route }) {
    const { title,Rating, Body } = route.params
      
    return (
        <View style={globalStyles.container}>
            <Card>
            <Text style={globalStyles.paragraph}>Title: {title}</Text>
            <Text style={globalStyles.paragraph}>Body: {Body}</Text>
                <View style={styles.ratings}>
                    <Text>Rating</Text>
                     <Image source={(images.ratings[Rating])} />
            </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    ratings: {
        padding:10,
        borderRadius:6,
        backgroundColor:'#777a',
        flexDirection: 'row',
        justifyContent:'center'
        
    },
   
})