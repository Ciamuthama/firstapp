import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./homeStack";
import AboutStack from "../routes/aboutstack";


const Drawer = createDrawerNavigator();


export default function Drawers() {
    const MyTheme = {
      dark: false,
      
      colors: {
          primary: '#e26f4b',
          card: '#fff',
          text: '#000',
      },
      
      };

  return (
      <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName='Home' screenOptions={{
              headerShown:false,
              headerStyle: {
                  backgroundColor: "#e26f4b",
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
