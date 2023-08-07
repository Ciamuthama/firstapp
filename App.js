import React, {useState} from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'peter', id: '1' },
    { name: 'jeff', id: '2' },
    { name: 'steve', id: '3' },
    { name: 'james', id: '4' },
    { name: 'james', id: '5' },
    { name: 'james', id: '6' },
    { name: 'james', id: '7' },
    { name: 'james', id: '8' },
    { name: 'james', id: '9' },
    { name: 'james', id: '10' },
    { name: 'james', id: '11' },
    { name: 'james', id: '12' },
    { name: 'james', id: '13' },
    { name: 'james', id: '14' },
    { name: 'james', id: '15' },
    
  ])



  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{ item.name}</Text>
        )}
      />

      {/* {people.map((item) => {
        return(
          <View key={item.key}>
            <Text style={styles.item}>{ item.name}</Text>
        </View>
        )
      })} */}
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
    margin: 50,

    fontSize: 24,
  }
});
