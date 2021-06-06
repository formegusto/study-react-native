import { ParamListBase, RouteProp } from "@react-navigation/core";
import React, { useCallback } from "react";
import { Button, Text, View } from "react-native";
import ViewStyles from "../styles/ViewStyles";

interface RouteProps {
  itemId: number;
  otherParam: string;
}

interface Props {
  kind: string;
  route: RouteProp<Record<string, object | undefined>, "Detail">;
  navigation: any;
}

function DetailScreen(props: Props) {
  const { itemId, otherParam } = props.route.params as RouteProps;

  const Updating = useCallback(() => {
    props.navigation.setParams({ ...props.route.params, itemId: 6 });
  }, []);

  return (
    <View style={ViewStyles.FullSreen}>
      <Text>{`${itemId} / ${
        otherParam || "not other"
      } 에 대한 상세페이지 입니다.`}</Text>
      <Button
        title="계속 들어가 볼까요?"
        onPress={() =>
          props.navigation.push("Detail", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="6 바꾸기!" onPress={Updating} />
      <Button
        title="홈으로"
        onPress={() => props.navigation.navigate("Home")}
        // initRoute 로 돌아가기 때문에 돌아가는 느낌이다.
      />
      <Button
        title="뒤로"
        onPress={() => props.navigation.goBack()}
        // 순수하게 이전 스택으로 돌아간다.
      />
      <Button
        title="첫 번째 페이지로"
        onPress={() => props.navigation.popToTop()}
        // 스택의 최상위 까지 Pop 한다.
      />
    </View>
  );
}

export default DetailScreen;
