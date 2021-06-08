import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import NewsScreen from "./screens/NewsScreen";
import { categories } from "./common/categories";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="all">
        {categories.map((c, idx) => (
          <Tab.Screen
            key={c.name}
            name={c.name}
            component={NewsScreen}
            options={{
              title: c.text,
            }}
            initialParams={{ category: c }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
