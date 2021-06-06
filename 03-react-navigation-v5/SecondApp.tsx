import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NestHome from "./nesting-screens/NestHome";

const Stack = createStackNavigator();
function SecondApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={NestHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SecondApp;
