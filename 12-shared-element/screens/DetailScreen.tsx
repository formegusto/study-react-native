import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import image from "../assets/images/image-2.png";
import Screen from "../styles/Screen";

function DetailScreen() {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <SharedElement id="image" style={StyleSheet.absoluteFill}>
          <Image
            source={image}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </SharedElement>
        <SharedElement id="text">
          <Text
            style={{
              marginTop: 20,
              color: "white",
              fontSize: 60,
              fontWeight: "bold",
            }}
          >
            디테일
          </Text>
        </SharedElement>
      </View>
    </>
  );
}

DetailScreen.sharedElements = (route: any, otherRoute: any, showing: any) => [
  { id: "image" },
  { id: "text", animation: "fade" },
];

export default DetailScreen;
