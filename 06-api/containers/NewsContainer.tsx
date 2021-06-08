import React from "react";
import NewsComponent from "../components/NewsComponent";
import { Category } from "../common/categories";

type Props = {
  category: Category;
};

function NewsContainer(props: Props) {
  console.log(props.category);
  return <NewsComponent category={props.category} />;
}

export default NewsContainer;
