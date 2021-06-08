import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/core";
import React from "react";
import { Category } from "../common/categories";
import NewsContainer from "../containers/NewsContainer";

type Params = {
  News: {
    category: Category;
  };
};

type Props = {
  navigation: BottomTabNavigationProp<Params, "News">;
  route: RouteProp<Params, "News">;
};

function NewsScreen(props: Props) {
  return <NewsContainer {...props.route.params} />;
}

export default NewsScreen;
