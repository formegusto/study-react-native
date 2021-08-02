import React from "react";
import Animated from "react-native-reanimated";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";

type Props = {
  offset: Animated.Value<number>;
};

function SmallHeader({ offset }: Props) {
  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        height: getStatusBarHeight() + 10,
        backgroundColor: "rgba(25, 20, 20, 0.5)",
        opacity: offset.interpolate({
          inputRange: [0, 40],
          outputRange: [0, 1],
        }),
      }}
    />
  );
}

const HeaderView = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: ${getStatusBarHeight() + 10}px;
  background-color: rgba(25, 20, 20, 0.5);
`;

export default SmallHeader;
