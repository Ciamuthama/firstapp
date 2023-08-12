import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import Review from "../screens/ReviewDetails";

const Stack = createNativeStackNavigator();

export default function Navigator() {
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
        <Stack.Screen name="Welcome" component={Home} options={{
            headerShown: false,
          }}/>
        <Stack.Screen
          name="Review"
        component={Review}
        options={{
          headerShown: false,
          
          
        }}
          />
      </Stack.Navigator>
    
  );
}
