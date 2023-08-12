import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
    import { useColorScheme } from 'react-native';
import Home from "./homeStack";
import AboutStack from "../routes/aboutstack";


const Drawer = createDrawerNavigator();


export default function Drawers({title}) {
    const MyTheme = {
        dark: false,
        
        colors: {
          primary: '#f4511e',
          card: '#fff',
          text: '#000',
        },
      };

  return (
      <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName='Home' screenOptions={{
              headerShown:false,
              headerStyle: {
                  backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  fontFamily: "nunito-bold",
              }
          }} >
        <Drawer.Screen name="Home" option={{headerShown: false}} component={Home} />
        <Drawer.Screen name="About" option={{headerShown: false}} component={AboutStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
