import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ProfileScreen from "./nesting-screens/ProfileScreen";
import SettingScreen from "./nesting-screens/SettingScreen";
import HeaderScreen from "./screens/HeaderScreen";
import HomeScreen from "./screens/HomeScreen";

const Tab = createBottomTabNavigator();

function LifeCycleApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="first">
          {() => (
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Settings" component={SettingScreen} />
            </Tab.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="seconde">
          {() => (
            <Tab.Navigator>
              <Tab.Screen name="Profile" component={ProfileScreen} />
              <Tab.Screen name="Header" component={HeaderScreen} />
            </Tab.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default LifeCycleApp;
