import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return ( 
        <View style={styles.container}>
            <Text style={styles.header}>My ToDo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2196F3',
        height: 80,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent:'center',
    },
    header: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center'

        
    }
})
