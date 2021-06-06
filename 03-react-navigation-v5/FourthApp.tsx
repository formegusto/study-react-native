import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./nesting-screens/ProfileScreen";
import SettingScreen from "./nesting-screens/SettingScreen";
import NestHomeScreen from "./nesting-screens/NestHomeScreen";

const RootStack = createStackNavigator();
const NestStack = createStackNavigator();

function Home() {
  return (
    <NestStack.Navigator>
      <NestStack.Screen name="Profile" component={ProfileScreen} />
      <NestStack.Screen name="Setting" component={SettingScreen} />
    </NestStack.Navigator>
  );
}

function FourthApp() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Seconde" component={NestHomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default FourthApp;
