import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, Text, View } from "react-native";
import Screen from "../../styles/Screen";

type Props = {
  navigation: StackNavigationProp<any, "Main">;
};

function MainScreen({ navigation }: Props) {
  return (
    <View style={Screen.FullScreen}>
      <Text>메인 스크린</Text>
      <Button
        title="Second"
        onPress={() =>
          navigation.push("Second", {
            animations: {
              push: {
                content: {},
              },
            },
          })
        }
      />
    </View>
  );
}

export default MainScreen;
