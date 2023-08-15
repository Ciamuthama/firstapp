import React from 'react'
import {  Text, View } from 'react-native';
import { globalStyles } from '../styles/globalstyles';

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.paragraph}>About Screen</Text>
        </View>
    )
}
