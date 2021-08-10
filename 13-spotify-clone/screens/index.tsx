import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import SmallPlayer from "../components/atoms/SmallPlayer";
import SpotifyPalette from "../styles/Palette";
import HomeStack from "./home";
import LibraryStack from "./library";
import SearchStack from "./search";

const Tabs = createBottomTabNavigator();

const Navs = [
  {
    name: "Home",
    label: "홈",
    component: HomeStack,
    icon: <Ionicons name="home-outline" size={24} color="#B5B5B5" />,
    activeIcon: <Ionicons name="home" size={24} color="white" />,
  },
  {
    name: "Search",
    label: "검색하기",
    component: SearchStack,
    icon: <Ionicons name="search-outline" size={24} color="#B5B5B5" />,
    activeIcon: <Ionicons name="search" size={24} color="white" />,
  },
  {
    name: "Library",
    label: "내 라이브러리",
    component: LibraryStack,
    icon: <Ionicons name="library-outline" size={24} color="#B5B5B5" />,
    activeIcon: <Ionicons name="library" size={24} color="white" />,
  },
];

type Props = {
  navigation: StackNavigationProp<any, "Main">;
};

function MainScreen({ navigation }: Props) {
  return (
    <>
      <Tabs.Navigator
        screenOptions={{
          tabBarBackground: () => (
            <LinearGradient
              colors={[
                "rgba(25,20,20,0.5)",
                "rgba(25,20,20,1)",
                "rgba(25,20,20,1)",
              ]}
              style={StyleSheet.absoluteFill}
            />
          ),
          tabBarStyle: {
            position: "absolute",
            borderTopWidth: 0,
          },

          headerShown: false,
        }}
      >
        {Navs.map((nav) => (
          <Tabs.Screen
            key={nav.name}
            name={nav.name}
            component={nav.component}
            options={{
              tabBarLabel: nav.label,
              tabBarIcon: ({ focused }) =>
                focused ? nav.activeIcon : nav.icon,
              tabBarLabelStyle: {
                color: SpotifyPalette["White"],
              },
            }}
          />
        ))}
      </Tabs.Navigator>
      <SmallPlayer onPlayer={() => navigation.push("Player")} />
    </>
  );
}

export default MainScreen;
