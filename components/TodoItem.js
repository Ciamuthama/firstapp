import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({item, onPress}) {
    return (
        <TouchableOpacity onPress={() => onPress(item.key)}>
            <View style={styles.text}>
            <Text >{item.text}</Text>
            <MaterialIcons name='delete-forever' size={24} color={"#000"} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    text: {
        backgroundColor: 'pink',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderStyle: "dotted",
        borderColor: 'pink',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        borderWidth:2.5,
    }
})