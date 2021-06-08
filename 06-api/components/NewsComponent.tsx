import React from "react";
import {
  ActivityIndicator,
  RefreshControl,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-status-bar-height";
import NewsItem from "../atoms/NewsItem";

import { Category } from "../common/categories";
import { Article } from "../common/types";

type Props = {
  category: Category;
  articles: Article[];
  loading: boolean;
  refresh: () => void;
};

function NewsComponent({ category, articles, loading, refresh }: Props) {
  return loading ? (
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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator />
      </View>
    </View>
  ) : (
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
      <ScrollView
        style={Styles.NewsBlock}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
      >
        {articles.map((article) => (
          <NewsItem key={article.url} {...article} />
        ))}
      </ScrollView>
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
    flexDirection: "column",
  },
});

export default NewsComponent;
