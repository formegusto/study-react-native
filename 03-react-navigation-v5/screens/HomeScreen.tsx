import { RouteProp } from "@react-navigation/core";
import React from "react";
import { Button, Text, View } from "react-native";
import ViewStyles from "../styles/ViewStyles";

type RouteProps = {
  post: string;
};

type Props = {
  route: RouteProp<Record<string, RouteProps | undefined>, "Home">;
  navigation: any;
};

function HomeScreen(props: Props) {
  React.useEffect(() => {
    if (props.route.params?.post) {
      // post가 있을 경우 처리할 페이지
    }
  }, [props.route.params?.post]);

  return (
    <View style={ViewStyles.FullSreen}>
      <Text>HomeScreen</Text>
      <Button
        title="상세페이지 이동"
        onPress={() =>
          props.navigation.navigate("Detail", {
            itemId: 1002,
            otherParam: "anything",
          })
        }
      />
      <Button
        title="게시물 등록하기"
        onPress={() => props.navigation.navigate("CreatePost")}
      />
      <Text>등록된 게시물 : {props.route.params?.post || "없음"}</Text>
      <Button
        title="헤더 페이지"
        onPress={() => props.navigation.navigate("Header")}
      />
      <Button
        title="카운트 페이지"
        onPress={() => props.navigation.navigate("Count")}
      />
      <Button
        title="Root"
        onPress={() =>
          props.navigation.navigate("Root", {
            screen: "Setting",
          })
        }
      />
    </View>
  );
}

export default HomeScreen;
