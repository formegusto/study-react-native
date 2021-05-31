import React, { useCallback, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function ResizingComponent() {
  const [ani, setAni] = useState<Animated.Value>(new Animated.Value(100));
  const [value, setValue] = useState<number>(200);

  const resize = useCallback(() => {
    Animated.timing(ani, {
      toValue: value,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    setValue(value === 200 ? 100 : 200);
  }, [value]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.aniContainer,
          {
            width: ani,
            height: ani,
          },
        ]}
      >
        <TouchableOpacity
          onPress={resize}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.text}>test test test</Text>
        </TouchableOpacity>
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
  aniContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#2d2d2d",
  },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
  },
});

export default ResizingComponent;
