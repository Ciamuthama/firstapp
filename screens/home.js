import React from 'react'
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/globalstyles';

export default function Home({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Home Screen</Text>
            <Button
            title="Reviews"
             onPress={() => navigation.navigate('Review')}
            />
        </View>
    )
}
