import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SharedElement } from "react-native-shared-element";
import Screen from "../styles/Screen";

type Props = {
  navigation: StackNavigationProp<any, "Main">;
};

function MainScreen({ navigation }: Props) {
  return (
    <View style={Screen.FullScreen}>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <SharedElement id="text">
          <Text>메인</Text>
        </SharedElement>
      </TouchableOpacity>
    </View>
  );
}

export default MainScreen;
