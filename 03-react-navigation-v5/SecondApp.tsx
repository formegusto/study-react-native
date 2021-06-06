import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NestHome from "./nesting-screens/NestHome";
import ProfileScreen from "./nesting-screens/ProfileScreen";
import SettingScreen from "./nesting-screens/SettingScreen";

const Stack = createStackNavigator();
function SecondApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Home" component={NestHome} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SecondApp;
