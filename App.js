import React, {useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const[name,setName]= useState('blank')

  const clickHandler = () => {
    setName('new name')
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler}/>
      </View>
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
  }
 
});
