import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./screens/home";
import SearchStack from "./screens/search";
import LibraryScreen from "./screens/LibraryScreen";
import { Ionicons } from "@expo/vector-icons";
import SpotifyPalette from "./styles/Palette";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { FullScreen } from "./styles";
import Player from "./components/atoms/Player";
import { Animated } from "react-native";
import PlayerScreen from "./components/atoms/PlayerScreen";
import { enableScreens } from "react-native-screens";

enableScreens(false);

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
    component: LibraryScreen,
    icon: <Ionicons name="library-outline" size={24} color="#B5B5B5" />,
    activeIcon: <Ionicons name="library" size={24} color="white" />,
  },
];

function App() {
  const offset = React.useRef<Animated.Value>(new Animated.Value(0)).current;

  const onPlayer = React.useCallback(() => {
    Animated.timing(offset, {
      toValue: 100,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const offPlayer = React.useCallback(() => {
    Animated.timing(offset, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <FullScreen black>
      <NavigationContainer>
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
      </NavigationContainer>
      <Player onPlayer={onPlayer} />
      <PlayerScreen offset={offset} offPlayer={offPlayer} />
    </FullScreen>
  );
}

export default App;
