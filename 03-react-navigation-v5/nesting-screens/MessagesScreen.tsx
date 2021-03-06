import React from "react";
import { Button, Text, View } from "react-native";
import ViewStyles from "../styles/ViewStyles";

type Props = {
  navigation: any;
};

function MessagesScreen(props: Props) {
  return (
    <View style={ViewStyles.FullSreen}>
      <Text>메세지 스크린</Text>
      <Button title="뒤로 가기" onPress={() => props.navigation.goBack()} />
    </View>
  );
}

export default MessagesScreen;
