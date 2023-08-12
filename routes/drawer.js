import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
    import { useColorScheme } from 'react-native';
import Home from "./homeStack";
import AboutStack from "../routes/aboutstack";

const Drawer = createDrawerNavigator();


export default function Drawers() {
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
              headerStyle: {
                  backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  fontFamily: "nunito-bold",
              }
          }} >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={AboutStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
