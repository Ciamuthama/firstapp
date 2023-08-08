import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
     
            <Text style={styles.one}>Sandbox1</Text>
            <Text style={styles.two}>Sandbox2</Text>
            <Text style={styles.three}>Sandbox3</Text>
            <Text style={ styles.four }>Sandbox4</Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        //flexGrow: 1,
        flexDirection: 'row',
        justifyContent:'space-around',
        backgroundColor: '#ff12',
        paddingTop: 50
    },
    one: {
        backgroundColor: 'red',
        fontWeight: 'bold',
        padding:10,
        //textAlign: 'center',
    },
    two: {
        backgroundColor: 'green',
        //textAlign: 'center',
        textShadowColor: "#fff",
        fontWeight: 'bold',
        padding:10,
    }
    , three: {
        padding:10,
        backgroundColor: "blue",
        //textAlign: 'center',
        fontWeight: 'bold',
    },
    four: {
        padding:10,
        backgroundColor: 'magenta',
        //textAlign: 'center',
        fontWeight: 'bold',
    }
})
