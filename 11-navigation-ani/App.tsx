import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./screens/stack/MainScreen";
import SecondScreen from "./screens/stack/SecondScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{
            cardStyleInterpolator: ({ current, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateY: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
