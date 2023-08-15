import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

export default function AboutStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#e26f4b",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "nunito-bold",
        },
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={() => ({
          headerLeft: () => <Header navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}
