import React from "react";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import SpotifyPalette from "../../styles/Palette";
import mito from "../../assets/image/mito.jpg";

type ItemProps = {
  isMargin?: boolean;
};

function MusicItem({ isMargin }: ItemProps) {
  return (
    <ItemView isMargin={isMargin}>
      <AlbumArt source={mito} resizeMode="cover" />
      <AlbumText>Moodswings in This Order</AlbumText>
    </ItemView>
  );
}

const ItemView = styled.View<ItemProps>`
  flex-direction: row;
  align-items: center;

  width: ${Dimensions.get("screen").width / 2 - 22}px;
  background-color: ${SpotifyPalette["LightBlack"]};
  border-radius: 8px;
  overflow: hidden;

  ${({ isMargin }) =>
    isMargin
      ? css`
          margin: 0 10px 10px 0;
        `
      : css`
          margin: 0 0 10px 0;
        `}
`;

const AlbumArt = styled.Image`
  width: 60px;
  height: 60px;
`;

const AlbumText = styled.Text`
  flex: 1;
  margin: 0 10px 0 10px;
  font-size: 10px;
  font-weight: 700;
  color: ${SpotifyPalette["White"]};
`;

type ViewProps = {
  goAlbum: () => void;
};

function SmallMusic({ goAlbum }: ViewProps) {
  return (
    <SmallView>
      {Array.from({ length: 6 }).map((num, idx) => (
        <TouchableOpacity key={idx} activeOpacity={0.9} onPress={goAlbum}>
          <MusicItem isMargin={idx % 2 === 0} />
        </TouchableOpacity>
      ))}
    </SmallView>
  );
}

const SmallView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export default SmallMusic;
