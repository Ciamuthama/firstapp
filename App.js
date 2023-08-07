import React, {useState} from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'peter', key: '1' },
    { name: 'jeff', key: '2' },
    { name: 'steve', key: '3' },
    { name: 'james', key: '4' },
    
  ])



  return (
    <View style={styles.container}>
      {people.map((item) => {
        return(
          <View key={item.key}>
            <Text style={styles.item}>{ item.name}</Text>
        </View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  item: {
    backgroundColor: 'gray',
    padding: 20,
    marginTop: 30,
    fontSize: 24,
  }
});
