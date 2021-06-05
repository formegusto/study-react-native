import React from "react";
import { Button, Text, View } from "react-native";
import ViewStyles from "../styles/ViewStyles";

type Props = {
  navigation: any;
};

function HomeScreen(props: Props) {
  return (
    <View style={ViewStyles.FullSreen}>
      <Text>HomeScreen</Text>
      <Button
        title="상세페이지 이동"
        onPress={() => props.navigation.navigate("Detail")}
      />
    </View>
  );
}

export default HomeScreen;
