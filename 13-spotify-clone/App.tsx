import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { FullScreen } from "./styles";
import { enableScreens } from "react-native-screens";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import MainScreen from "./screens";
import PlayerStack from "./components/atoms/Player";

enableScreens(false);
const Stack = createStackNavigator();

function App() {
  return (
    <FullScreen black>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Main"
        >
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen
            name="Player"
            component={PlayerStack}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FullScreen>
  );
}

export default App;
