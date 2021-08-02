import styled, { css } from "styled-components/native";
import SpotifyPalette from "./Palette";

export const FullScreen = styled.View<{ center?: boolean; dark?: boolean }>`
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
`;
