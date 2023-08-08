import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({item, onPress}) {
    return (
        <TouchableOpacity onPress={()=>onPress(item.key)}>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    text: {
        backgroundColor: 'pink',
        padding: 10,
        margin: 5,
        borderRadius: 8,
    }
})