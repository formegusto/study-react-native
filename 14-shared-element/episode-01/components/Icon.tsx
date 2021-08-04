import React from "react";
import { StyleSheet } from "react-native";
import { Image, View } from "react-native";

type Props = {
  uri: string;
};

function Icon({ uri }: Props) {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: uri }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 64 * 0.6,
    height: 64 * 0.6,
    resizeMode: "contain",
  },
});

export default Icon;
