import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SvcLocationScreen from "./screens/SvcLocationScreen";

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />

        <Tab.Screen name="Registration" component={RegistrationScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Location" component={SvcLocationScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
