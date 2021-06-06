import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "./FeedScreen";
import MessagesScreen from "./MessagesScreen";
import { Button, View } from "react-native";

const Tab = createBottomTabNavigator();

type Props = {
  navigation: any;
};

function NestHome(props: Props) {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}

export default NestHome;
