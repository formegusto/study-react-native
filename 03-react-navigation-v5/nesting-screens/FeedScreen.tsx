import React from "react";
import { Button, Text, View } from "react-native";
import ViewStyles from "../styles/ViewStyles";

type Props = {
  navigation: any;
};

function FeedScreen(props: Props) {
  return (
    <View style={ViewStyles.FullSreen}>
      <Text>피드 스크린</Text>
      <Button
        title="프로필 보기"
        onPress={() => props.navigation.navigate("Profile")}
      />
      <Button
        title="세팅"
        onPress={() => props.navigation.navigate("Setting")}
      />
      <Button title="뒤로 가기" onPress={() => props.navigation.goBack()} />
    </View>
  );
}

export default FeedScreen;
