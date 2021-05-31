import React, { useCallback, useEffect, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";

function ScaleComponent() {
  const [ani, setAni] = useState<Animated.Value>(new Animated.Value(1));
  const [value, setValue] = useState<number>(2);

  const scale = useCallback(() => {
    Animated.timing(ani, {
      useNativeDriver: true,
      toValue: value,
      duration: 2000,
    }).start();

    setValue(value === 2 ? 1 : 2);
  }, [value]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.aniContainer,
          {
            transform: [{ scale: ani }],
          },
        ]}
      >
        <TouchableOpacity onPress={scale} style={styles.button} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2d2d2d",
  },
  aniContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#333333",
    borderRadius: 20,
  },
  button: {
    width: "100%",
    height: "100%",
  },
});

export default ScaleComponent;
