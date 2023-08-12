import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import About from "../screens/about";


const Stack = createNativeStackNavigator();

export default function AboutStack() {
    return (
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: "#f4511e",
                    
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontFamily: "nunito-bold",
                },
              }}>
                <Stack.Screen name="About" component={About}/>
            </Stack.Navigator>
  );
}
