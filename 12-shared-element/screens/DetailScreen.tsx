import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SharedElement } from "react-native-shared-element";
import Screen from "../styles/Screen";

function DetailScreen() {
  return (
    <View style={Screen.FullScreen}>
      <SharedElement id="text" style={StyleSheet.absoluteFill}>
        <Text>메인</Text>
      </SharedElement>
    </View>
  );
}

export default DetailScreen;
