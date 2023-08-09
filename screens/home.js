import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
    },
    title: {
        fontFamily: 'nunito-bold',
        fontSize:24,
    }
})