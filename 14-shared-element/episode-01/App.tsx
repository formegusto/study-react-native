import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Detail from "./components/Detail";
import List from "./components/List";

enableScreens(false);

const Stack = createSharedElementStackNavigator();

// react-navigation-shared-element
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List" headerMode="none">
        <Stack.Screen name="List" component={List} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: { animation: "timing", config: { duration: 1000 } },
              close: { animation: "timing", config: { duration: 1000 } },
            },
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
