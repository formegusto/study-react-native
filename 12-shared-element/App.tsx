import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./screens/MainScreen";
import DetailScreen from "./screens/DetailScreen";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Main" component={MainScreen} />
        <stack.Screen name="Detail" component={DetailScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
