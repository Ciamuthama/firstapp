import React from 'react'
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/globalstyles';

export default function Home() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Home Screen</Text>
        </View>
    )
}
