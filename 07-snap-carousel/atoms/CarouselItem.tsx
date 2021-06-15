import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Item } from "../types";

type Props = {
  item: Item;
};

function CarouselItem({ item }: Props) {
  return (
    <View style={styles.slide}>
      <View style={styles.imageBlock}></View>
      <View style={styles.textBlock}>
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={4}>{item.descriptuon}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    width: 275,
    height: 275,
    backgroundColor: "#FFF",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    flexDirection: "column",
  },
  imageBlock: {
    flex: 2,
    backgroundColor: "#999",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  textBlock: {
    flex: 1,
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 8,
    color: "#333",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  description: {},
});

export default CarouselItem;
