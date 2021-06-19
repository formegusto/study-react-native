import React, { useCallback } from "react";
import { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import DescItem from "./atoms/DescItem";

import { Dimensions } from "react-native";
import { useEffect } from "react";

const { width, height } = Dimensions.get("screen");

function App() {
  const [ani, setAni] = useState<Animated.Value>(new Animated.Value(0));

  const onPress = useCallback((menu: "desc" | "class") => {
    Animated.timing(ani, {
      toValue: menu !== "desc" ? width / 2 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabBarItem}
          onPress={() => onPress("desc")}
        >
          <Text style={styles.tabBarText}>소개</Text>
        </TouchableOpacity>
        <View style={{ width: 0.5, height: "100%", backgroundColor: "#FFF" }} />
        <TouchableOpacity
          style={styles.tabBarItem}
          onPress={() => onPress("class")}
        >
          <Text style={styles.tabBarText}>수업소개</Text>
        </TouchableOpacity>
        <Animated.View
          style={{
            position: "absolute",
            height: 1,
            width: "50%",
            bottom: 0,
            left: 0,
            backgroundColor: "#FFF",
            transform: [
              {
                translateX: ani,
              },
            ],
          }}
        />
      </View>
      <ScrollView>
        <DescItem />
        <DescItem />
        <DescItem />
        <DescItem />
        <DescItem />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  tabBar: {
    position: "relative",
    flexDirection: "row",
  },
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  tabBarText: {
    color: "#CCC",
    fontSize: 14,
  },
});

export default App;
