import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Review() {
    return (
        <View style={styles.container}>
            <Text>Review Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        
    }
})