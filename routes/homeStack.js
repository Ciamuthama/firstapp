import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import Review from "../screens/ReviewDetails";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Home} />
        <Stack.Screen name="Review" component={Review} initialParams={'item'}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
