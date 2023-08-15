import React from 'react'
import {  ImageBackground, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalstyles';

export default function About() {
    return (
        <ImageBackground source={require('../assets/game_bg.png') } style={globalStyles.container}>
            <Text style={globalStyles.paragraph}>About Screen</Text>
        </ImageBackground>
    )
}
 