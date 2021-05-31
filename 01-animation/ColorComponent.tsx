import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function ColorComponent() {
  const [ani, setAni] = useState<Animated.Value>(new Animated.Value(0));

  const colorChange = (id: number) => {
    Animated.timing(ani, {
      useNativeDriver: false,
      toValue: id,
      duration: 1000,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedView,
          {
            backgroundColor: ani.interpolate({
              inputRange: [0, 1, 2],
              outputRange: ["red", "green", "blue"],
            }),
          },
        ]}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => colorChange(0)}
          style={[styles.button, styles.red]}
          activeOpacity={0.8}
        >
          <Text style={{ color: "#fff" }}>Red</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => colorChange(1)}
          style={[styles.button, styles.green]}
          activeOpacity={0.8}
        >
          <Text style={{ color: "#fff" }}>Green</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => colorChange(2)}
          style={[styles.button, styles.blue]}
          activeOpacity={0.8}
        >
          <Text style={{ color: "#fff" }}>Blue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  animatedView: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 8,
  },
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
  blue: {
    backgroundColor: "blue",
  },
});

export default ColorComponent;
