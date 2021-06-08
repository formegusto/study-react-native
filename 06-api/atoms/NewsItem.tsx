import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Article } from "../common/types";

function NewsItem(props: Article) {
  return (
    <View style={Styles.NewsItemBlock}>
      {props.urlToImage ? (
        <Image source={{ uri: props.urlToImage }} style={Styles.Image} />
      ) : (
        <View style={Styles.NotImage}></View>
      )}
      <View style={Styles.NewsItemContent}>
        <Text
          numberOfLines={1}
          style={{ fontSize: 20, fontWeight: "700", marginBottom: 8 }}
        >
          {props.title}
        </Text>
        <Text numberOfLines={2} style={{ marginBottom: 6 }}>
          {props.description}
        </Text>
        <Text style={{ textAlign: "right", fontSize: 8 }}>
          {props.publishedAt}
        </Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  NewsItemBlock: {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    flexDirection: "row",
    alignItems: "center",
  },
  NotImage: {
    marginLeft: 16,
    marginRight: 8,
    width: 80,
    height: 80,
    backgroundColor: "#666",
  },
  Image: {
    marginLeft: 16,
    marginRight: 8,
    width: 80,
    height: 80,
  },
  NewsItemContent: {
    flex: 1,
    marginRight: 16,
  },
});

export default NewsItem;
