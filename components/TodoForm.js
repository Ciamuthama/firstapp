import React, { useState} from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function TodoForm({onSubmit}) {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter your todo"
                value={text}
                onChangeText={(value) => setText(value)}
            />
            <Button onPress={()=> onSubmit(text)} title='add todo' color="coral"/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        margin:10
    },

    input: {
        paddingVertical: 10,
        fontSize: 24,
        color: 'black',
        borderBottomWidth: 0.7,
        borderBottomColor: 'black',
        marginBottom:10
    }
})