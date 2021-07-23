import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  number: number;
};
function GridItem({ number }: Props) {
  return (
    <View
      style={{
        ...styles.gridContainer,
        backgroundColor: `rgb(${Math.floor(Math.random() * 256)},
          ${Math.floor(Math.random() * 256)},
          ${Math.floor(Math.random() * 256)}
        )`,
      }}
    ></View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    width: "100%",
    height: "100%",
  },
});

export default GridItem;
