import React, {useState} from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  
  const clickHandler = () => {
    setName('new name')
  }

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput style={styles.input} placeholder='Name' onChangeText={(e) => setName(e)} />
      
      
      <Text>Enter age:</Text>
      <TextInput keyboardType='numeric' style={ styles.input} placeholder='Name' onChangeText={(e)=> setAge(e)}/>
      <Text>My name is {name} and age is {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },

  input: {
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 200,
  }
 
});
