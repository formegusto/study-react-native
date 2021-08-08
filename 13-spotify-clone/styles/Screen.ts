import { Animated } from "react-native";
import styled, { css } from "styled-components/native";
import SpotifyPalette from "./Palette";

export const FullScreen = styled.View<{
  center?: boolean;
  dark?: boolean;
  black?: boolean;
}>`
  width: 100%;
  height: 100%;

  ${({ dark }) =>
    dark &&
    css`
      background-color: ${SpotifyPalette["Black"]};
    `}

  ${({ center }) =>
    center &&
    css`
      justify-content: center;
      align-items: center;
    `};

  ${({ black }) =>
    black &&
    css`
      background-color: #000;
    `}
`;

export const AnimatedFullScreen = styled(Animated.View)<{
  center?: boolean;
  dark?: boolean;
  radius?: boolean;
}>`
  width: 100%;
  height: 100%;

  ${({ dark }) =>
    dark &&
    css`
      background-color: ${SpotifyPalette["Black"]};
    `}

  ${({ center }) =>
    center &&
    css`
      justify-content: center;
      align-items: center;
    `};

  ${({ radius }) =>
    radius &&
    css`
      overflow: hidden;
      border-radius: 16px;
    `}
`;
