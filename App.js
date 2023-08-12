import React,{useState} from 'react'
import * as Font from 'expo-font'
import Drawers from './routes/drawer';

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
        <Drawers/>
    )
  } else {
    getFonts();
  }
}
