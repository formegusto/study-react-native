import React from "react";
import { StyleSheet, View, Text } from "react-native";

type Item = {
  title: string;
};

type Props = {
  item: Item;
};

function CarouselItem(props: Props) {
  return (
    <View style={styles.slide}>
      <Text style={styles.text}>{props.item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    width: 250,
    height: 250,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
  },
});

export default CarouselItem;
