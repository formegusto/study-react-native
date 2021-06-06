import React from "react";
import { Button, View } from "react-native";
import ViewStyles from "../styles/ViewStyles";

type Props = {
  navigation: any;
};

function HeaderScreen(props: Props) {
  return (
    <View style={ViewStyles.FullSreen}>
      <Button
        title="헤더 타이틀을 바꿔봅시다!"
        onPress={() =>
          props.navigation.setOptions({
            title: "바뀐타이틀",
            headerStyle: {
              backgroundColor: "#2d2d2d",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })
        }
      />
    </View>
  );
}

export default HeaderScreen;
