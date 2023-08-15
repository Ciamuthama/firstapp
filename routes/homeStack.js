import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import Review from "../screens/ReviewDetails";
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

export default function Navigator({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#e26f4b",
        },

        headerTintColor: "#000",
        headerTitleStyle: {
          fontFamily: "nunito-bold",
        },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Home}
        options={() => ({
          headerLeft: () => <Header navigation={navigation} />,
          title: "Home",
        })}
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{
          title: "Review",
        }}
      />
    </Stack.Navigator>
  );
}
