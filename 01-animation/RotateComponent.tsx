import React, { useCallback, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";

function RotateComponent() {
  const [ani, setAni] = useState<Animated.Value>(new Animated.Value(0));

  const rotate = useCallback(() => {
    Animated.timing(ani, {
      useNativeDriver: true,
      toValue: 1,
      duration: 3000,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [
              {
                rotate: ani.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "360deg"],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={rotate} style={styles.button} />
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
  },
  animatedView: {
    width: 100,
    height: 100,
    backgroundColor: "#FFFF00",
    borderRadius: 20,
  },
  button: {
    width: "100%",
    height: "100%",
  },
});

export default RotateComponent;
