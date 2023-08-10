import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalstyles';

export default function Review({ route }) {
    const {title, rating, body} = route.params

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.paragraph}>Title:{title}</Text>
            <Text style={globalStyles.paragraph}>Rating:{rating}</Text>
            <Text style={globalStyles.paragraph}>Description: {body}</Text>
        </View>
    )
}