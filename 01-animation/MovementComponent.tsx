import React, { useCallback, useEffect, useState } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity } from "react-native";

function MovementComponent() {
  const [ani, setAni] = useState<Animated.Value>(new Animated.Value(0));
  const [location, setLocation] = useState<string>("down");

  const onUp = useCallback(() => {
    Animated.timing(ani, {
      toValue: 250,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    setLocation("down");
  }, []);

  const onDown = useCallback(() => {
    Animated.timing(ani, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    setLocation("up");
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: ani }],
        },
      ]}
    >
      <TouchableOpacity
        onPress={location === "up" ? onUp : onDown}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.text}>{location}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 48,
    height: 48,
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  text: {
    color: "#FFF",
  },
});

export default MovementComponent;
