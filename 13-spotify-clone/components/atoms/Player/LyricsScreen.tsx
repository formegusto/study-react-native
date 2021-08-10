import React from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import styled from "styled-components/native";

function LyricsScreen() {
  const offset = React.useRef<Animated.Value>(new Animated.Value(0)).current;

  React.useState(() => {
    Animated.timing(offset, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  });

  return (
    <Lyrics.Wrap style={[StyleSheet.absoluteFill]}>
      <Lyrics.Header
        style={{
          transform: [
            {
              translateY: offset.interpolate({
                inputRange: [0, 1],
                outputRange: [-150, 0],
              }),
            },
          ],
          opacity: offset.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}
      />
      <SharedElement id="view">
        <Lyrics.View></Lyrics.View>
      </SharedElement>
      <Lyrics.Fotter
        style={{
          transform: [
            {
              translateY: offset.interpolate({
                inputRange: [0, 1],
                outputRange: [150, 0],
              }),
            },
          ],
          opacity: offset.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}
      />
    </Lyrics.Wrap>
  );
}

const Lyrics = {
  Wrap: styled.View``,
  Header: styled(Animated.View)`
    position: absolute;
    top: 0;
    width: 100%;
    height: 150px;
    background-color: #8d8d8d;
  `,
  View: styled.View`
    position: absolute;
    top: 150px;
    width: 100%;
    height: ${Dimensions.get("screen").height - 300}px;
    background-color: #8d8d8d;
  `,
  Fotter: styled(Animated.View)`
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 150px;
    background-color: #8d8d8d;
  `,
};

export default LyricsScreen;
