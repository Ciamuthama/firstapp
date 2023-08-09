import React, {useState} from 'react'
import { StyleSheet, View, FlatList, Text, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Font from 'expo-font';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import Sandbox from './components/Sandbox';

export default function App() {
  const [todo, setTodo] = useState([
    { text: 'Buy me coffee', key: '1' },
    {text:'Code more', key: '2'},
    { text: 'Break', key:'3' },
    {text:'Code extra more', key: '4'},
  ])

  const [fontLoad, setFontLoad] = useState(false)

    const getFonts = async () => {
      await Font.loadAsync({
      "NunitoBold": require('./assets/fonts/Nunito-Bold.ttf'),
        "NunitoRegular":require ('./assets/fonts/Nunito-Regular.ttf')
      })
      setFontLoad(true);
  }
  
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

  if (fontLoad) {
    return (
      
  
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
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
  } else {
    getFonts()
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    fontFamily: "NunitoBold",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 40,
  },

  list: {
    flex:1,
    padding: 10,
    fontSize: 24,
    margin: 20,
    //borderWidth: .8,
    //borderColor: '#ccc ',
    //borderRadius: 10,
    width: "100%",
    alignSelf: "center",
    fontFamily:"NunitoRegular"
  }
});
