import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function Header({navigation, title }) {

    return (
        <View source={require('../assets/game_bg.png')} style={styles.container}>
            <Feather  name="menu" size={28} onPress={() => navigation.openDrawer()} color="white" />
            <Image style={styles.image} source={require('../assets/heart_logo.png')}/>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        height:60,
        
    },
   
    headerTitle: {
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
        
    },
   
    text: {
        fontSize: 25,
        letterSpacing: 1,
        marginLeft: 10,
    },
    
    image: {
        width: 30,
        height: 30,
        marginLeft: 135,
        //marginTop:30,
        justifyContent: 'center',
        alignItems:'center',
    },
    

})