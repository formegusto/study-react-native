import React from "react";
import { Text, View } from "react-native";
import Screen from "../../styles/Screen";

function SecondScreen() {
  return (
    <View style={Screen.FullScreen}>
      <Text>두번째 스크린</Text>
    </View>
  );
}

export default SecondScreen;
