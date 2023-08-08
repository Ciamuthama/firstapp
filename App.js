import React, {useState} from 'react'
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import Header from './components/header';

export default function App() {

  const [todo, setTodo] = useState([
    { text: 'buy me coffee', key: '1' },
    {text:'Code more', key: '2'},
    { text: 'break', key:'3' },
    {text:'code extra more', key: '4'},
])



  return (
    <View style={styles.container}>
      {/* header*/}
     <Header />
      <View style={styles.content}>
        {/* to form*/}
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
  list: {
    padding: 20,
    fontSize: 24,
    margin: 20,
    borderWidth: .8,
    borderColor: '#ccc ',
    borderRadius: 10,
    width: "96%",
    alignSelf: "center",
    
  }
});
