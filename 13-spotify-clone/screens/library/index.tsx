import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LibraryScreen from "./LibraryScreen";
import SearchScreen from "./SearchScreen";

const Stack = createStackNavigator();

function LibraryStack() {
  return (
    <Stack.Navigator
      initialRouteName="Library"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Libary" component={LibraryScreen} />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default LibraryStack;
