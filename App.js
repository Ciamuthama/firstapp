import React,{useState} from 'react'
import * as Font from 'expo-font'
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  
  const getFonts = async() => {
    await Font.loadAsync({
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
    })
    setLoaded(true)
  }
  
  
  if (loaded) { 
    return (
      <View style={styles.container}>
        <Home />
      </View>
    )
  } else {
    getFonts();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
