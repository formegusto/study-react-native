import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import tree from "../../assets/image/tree.jpg";
import canilove from "../../assets/image/canilove.jpg";
import action from "../../assets/image/action.jpg";
import memories from "../../assets/image/memories.jpg";
import SpotifyPalette from "../../styles/Palette";

const images = [tree, memories, canilove, action];

function MiddleMusicItem() {
  return (
    <Item.View>
      <Item.ImageGrid>
        {images.map((img, idx) => (
          <Item.Image source={img} key={idx} resizeMode="cover" />
        ))}
      </Item.ImageGrid>
      <Item.Title>{"#formegusto"}</Item.Title>
      <Item.Type>Playlist</Item.Type>
    </Item.View>
  );
}

const Item = {
  View: styled.View`
    margin: 0 16px 0 0;
  `,
  ImageGrid: styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    width: 200px;
    height: 200px;
    margin: 0 0 8px;
  `,
  Image: styled.Image`
    width: 100px;
    height: 100px;
  `,
  Title: styled.Text`
    font-size: 12px;
    font-weight: 900;
    color: ${SpotifyPalette["White"]};
    margin: 0 0 4px;
  `,
  Type: styled.Text`
    font-size: 10px;
    color: #b3b4b4;
  `,
};

function MiddleMusic() {
  return (
    <ScrollView horizontal>
      {Array.from({ length: 4 }).map((num, idx) => (
        <MiddleMusicItem key={idx} />
      ))}
    </ScrollView>
  );
}

export default MiddleMusic;
