import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./screens/SearchScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import { Feather } from "@expo/vector-icons";

import RestaurantDetail from "./components/RestaurantDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#3737" },
          }}
        >
          <Stack.Screen
            name="Home"
            component={SearchScreen}
            options={{
              title: "Yelp",
              headerRight: () => <Feather name="search" size={24} />,
            }}
          />
          <Stack.Screen
            name="Detail"
            component={RestaurantDetail}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
