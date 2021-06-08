import React, { useEffect, useState } from "react";
import NewsComponent from "../components/NewsComponent";
import { Category } from "../common/categories";
import axios from "axios";
import getEnvVars from "../common/environment";
import { Article, News } from "../common/types";
import { Text, View } from "react-native";

type Props = {
  category: Category;
};

function NewsContainer(props: Props) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { name } = props.category;
        const cateogry = name === "all" ? "" : `&category=${name}`;
        const result = await axios.get<News>(
          `https://newsapi.org/v2/top-headlines?country=kr${cateogry}&apiKey=${
            (getEnvVars() as any).APIKEY
          }`
        );

        setArticles(result.data.articles);
      } catch {
        setError(true);
      }
      setLoading(false);
    };

    setLoading(true);
    fetchNews();
  }, []);

  return (
    <NewsComponent
      category={props.category}
      articles={articles}
      loading={loading}
    />
  );
}

export default NewsContainer;
