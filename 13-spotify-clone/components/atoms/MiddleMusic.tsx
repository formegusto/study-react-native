import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";
import SpotifyPalette from "../../styles/Palette";

type Props = {
  isRadius?: boolean;
  isOnlyTitle?: boolean;
  isTextCenter?: boolean;
  images?: any[];
  isFull?: boolean;
  title?: string;
};

function MiddleMusicItem(props: Props) {
  return (
    <Item.View>
      <Item.ImageGrid {...props}>
        {}
        {props.images?.length === 1 ? (
          <Item.Image source={props.images[0]} resizeMode="cover" isFull />
        ) : (
          props.images?.map((img, idx) => (
            <Item.Image source={img} key={idx} resizeMode="cover" />
          ))
        )}
      </Item.ImageGrid>
      <Item.Title {...props}>{props.title}</Item.Title>
      {!props.isTextCenter && <Item.Type>Playlist</Item.Type>}
    </Item.View>
  );
}

const Item = {
  View: styled.View`
    margin: 0 16px 0 0;
  `,
  ImageGrid: styled.View<Props>`
    flex-direction: row;
    flex-wrap: wrap;
    width: 200px;
    height: 200px;
    margin: 0 0 8px;

    overflow: hidden;

    ${({ isRadius }) =>
      isRadius &&
      css`
        border-radius: 200px;
      `}
  `,
  Image: styled.Image<Props>`
    width: 100px;
    height: 100px;

    ${({ isFull }) =>
      isFull &&
      css`
        width: 100%;
        height: 100%;
      `}
  `,
  Title: styled.Text<Props>`
    font-size: 12px;
    font-weight: 900;
    color: ${SpotifyPalette["White"]};
    margin: 0 0 4px;

    ${({ isTextCenter }) =>
      isTextCenter &&
      css`
        text-align: center;
      `}
  `,
  Type: styled.Text`
    font-size: 10px;
    color: #b3b4b4;
  `,
};

function MiddleMusic(props: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {Array.from({ length: 4 }).map((num, idx) => (
        <MiddleMusicItem key={idx} {...props} />
      ))}
    </ScrollView>
  );
}

export default MiddleMusic;
