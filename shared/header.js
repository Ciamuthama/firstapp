import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Header({navigation, title }) {

    return (
        <View style={styles.container}>
            <Feather name="menu" size={28} onPress={()=> navigation.openDrawer()} color="white"  />
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        height:'100%',
        width:'auto'
    },
   
    text: {
        color: 'black',
        fontSize: 25,
        letterSpacing: 1,
        marginLeft: 30,
        textAlign:'center'
    },

})