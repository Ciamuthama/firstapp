import React,{useState} from 'react'
import * as Font from 'expo-font'
import {  Text, View } from 'react-native';
import { globalStyles } from './styles/globalstyles';
import  Navigation  from './routes/homeStack';

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
        <Navigation />
    )
  } else {
    getFonts();
  }
}
