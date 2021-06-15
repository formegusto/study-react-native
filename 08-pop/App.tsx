import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";

const Tabs = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          style: {
            backgroundColor: "#292275",
          },
          activeTintColor: "#FFF",
          labelStyle: {
            fontSize: 12,
            fontWeight: "700",
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "홈",
          }}
        />
        <Tabs.Screen
          name="Interest"
          component={HomeScreen}
          options={{
            title: "관심종목",
          }}
        />
        <Tabs.Screen
          name="Current"
          component={HomeScreen}
          options={{
            title: "현재가",
          }}
        />
        <Tabs.Screen
          name="Order"
          component={HomeScreen}
          options={{
            title: "주식주문",
          }}
        />
        <Tabs.Screen
          name="History"
          component={HomeScreen}
          options={{
            title: "투자내역",
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
