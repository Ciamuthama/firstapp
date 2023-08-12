import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import Review from "../screens/ReviewDetails";
import Header from './header';

const Stack = createNativeStackNavigator();

export default function Navigator({navigation}) {
  return (
    
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
            marginBottom: 30,
        },
          
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "nunito-bold",
          },
        }}
      >
        <Stack.Screen name="Welcome"  component={Home} options={() => ({
          headerLeft: () => <Header navigation={ navigation} />,
          title: 'Home',
          })}/>
        <Stack.Screen
        name="Review"
        component={Review}
        options={{
          title:'Review'
        }}
          />
      </Stack.Navigator>
    
  );
}
