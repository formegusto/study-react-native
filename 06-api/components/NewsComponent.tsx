import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

import { Category } from "../common/categories";

type Props = {
  category: Category;
};

function NewsComponent({ category }: Props) {
  return (
    <View style={Styles.NewsContainer}>
      <View style={Styles.Header}>
        <Text
          style={{
            color: "#FFF",
            paddingTop: getStatusBarHeight(),
            fontSize: 20,
          }}
        >
          {category.text}
        </Text>
      </View>
      <View style={Styles.NewsBlock}>
        <Text></Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  NewsContainer: {
    flex: 1,
    flexDirection: "column",
  },
  Header: {
    height: 60 + getStatusBarHeight(),
    backgroundColor: "#2d2d2d",
    justifyContent: "center",
    alignItems: "center",
  },
  NewsBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewsComponent;
