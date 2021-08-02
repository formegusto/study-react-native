import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import Screen from "../styles/Screen";
import image from "../assets/images/image-2.png";
import { StyleSheet } from "react-native";
import TouchableScale from "react-native-touchable-scale";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
  },
  caption: {
    fontSize: 20,
    opacity: 0.5,
  },
  image: {
    width: 200,
    height: 160,
    resizeMode: "contain",
  },
});

type Props = {
  navigation: StackNavigationProp<any, "Main">;
  [key: string]: any;
};

function MainScreen({ navigation, modal }: Props) {
  console.log(modal);
  return (
    <>
      <TouchableScale
        style={styles.flex}
        activeScale={0.9}
        tension={50}
        friction={7}
        useNativeDriver
        onPress={
          modal
            ? () => navigation.navigate("Modal")
            : () => navigation.navigate("Detail")
        }
      >
        <View style={styles.container}>
          <SharedElement id="image">
            <Image style={styles.image} source={image} />
          </SharedElement>
          <SharedElement id="text">
            <Text style={styles.text}>The Boys</Text>
          </SharedElement>
          <Text style={styles.caption}>tap me</Text>
        </View>
      </TouchableScale>
    </>
  );
}

export default MainScreen;
