import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import AlbumScreen from "../common/AlbumScreen";
import { Animated } from "react-native";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="HomeIndex"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeIndex" component={HomeScreen} />
        <Stack.Screen name="Album" component={AlbumScreen} />
      </Stack.Navigator>
    </>
  );
}

export default HomeStack;
