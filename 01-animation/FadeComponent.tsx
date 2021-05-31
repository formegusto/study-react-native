import React, { useCallback, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function FadeComponent() {
  const [viewAni, setViewAni] = useState<Animated.Value>(new Animated.Value(1));
  const [value, setValue] = useState<number>(0);

  const fade = useCallback(() => {
    Animated.timing(viewAni, {
      useNativeDriver: true,
      toValue: value,
      duration: 2000,
    }).start();

    setValue((value + 1) % 2);
  }, [value]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animateView,
          {
            opacity: viewAni,
          },
        ]}
      >
        <TouchableOpacity
          onPress={fade}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text>Hello</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2D2D2D",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  animateView: {
    width: 100,
    height: 100,
    backgroundColor: "#FFF",
    borderRadius: 20,
  },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FadeComponent;
