import { StyleSheet,Text, View } from 'react-native'
import React from 'react'

export default function Card (props) {
  
    return (
        <View style={styles.card}>
            <View style={styles.cardsContent}>
                {props.children}
            </View>
      </View>
    )
}
 
const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'white',
        shadowOffset: {
            width: 1,
            height:1,
        },
        shadowColor: '#333',
        paddingHorizontal: 22,
        marginVertical: 18,
        shadowOpacity: 0.3,
        justifyContent:'center'
    },
    cardsContent: {
        marginHorizontal: 10,
        marginTop: 9,
        marginVertical: 20,
        
    }
})
