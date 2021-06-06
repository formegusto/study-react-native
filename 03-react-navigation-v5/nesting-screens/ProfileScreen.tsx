import React from "react";
import { Button, Text, View } from "react-native";
import ViewStyles from "../styles/ViewStyles";

type Props = {
  navigation: any;
};

function ProfileScreen(props: Props) {
  return (
    <View style={ViewStyles.FullSreen}>
      <Text>Profile Screen</Text>
      <Button
        title="홈으로"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
}

export default ProfileScreen;
