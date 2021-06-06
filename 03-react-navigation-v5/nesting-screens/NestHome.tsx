import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "./FeedScreen";
import MessagesScreen from "./MessagesScreen";

const Tab = createBottomTabNavigator();

function NestHome() {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}

export default NestHome;
