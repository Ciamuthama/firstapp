import React, {useState} from 'react'
import { StyleSheet, View, FlatList, Text, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

export default function App() {

  const [todo, setTodo] = useState([
    { text: 'buy me coffee', key: '1' },
    {text:'Code more', key: '2'},
    { text: 'break', key:'3' },
    {text:'code extra more', key: '4'},
])

  const onPress = (key) => {
    setTodo(prevTodo => {
     return  prevTodo.filter(todo => todo.key != key)
    })
  }

  const onSubmit = (text) => {
    if (text.length > 3) {
      console.log(text)
      setTodo((prevTodo) => [...prevTodo, { text: text, key: Math.random().toString() }]);
    } else {
      Alert.alert('Oops!!','The message is short 😢')
    }
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>

    <View style={styles.container}>
      {/* header*/}
     <Header />
      <View style={styles.content}>
        {/* to form*/}
        <TodoForm onSubmit={ onSubmit}/>
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <TodoItem item={item} onPress={onPress}  />
            )}
          />
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
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
