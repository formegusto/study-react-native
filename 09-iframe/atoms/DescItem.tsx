import React from "react";
import { StyleSheet, View, Text } from "react-native";

function DescItem() {
  return (
    <View style={Styles.container}>
      <View style={Styles.headerBlock}>
        <View style={Styles.profileBlock} />
        <Text style={{ color: "#FFF" }}>What is Lorem Ipsum?</Text>
      </View>
      <View style={Styles.imgBlock}></View>
      <Text style={{ marginTop: 10, color: "#FFF", paddingHorizontal: 10 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  imgBlock: {
    height: 400,
    backgroundColor: "#CCC",
  },
  headerBlock: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  profileBlock: {
    width: 36,
    height: 36,
    borderRadius: 36,
    backgroundColor: "#CCC",
    marginRight: 10,
  },
});

export default DescItem;
