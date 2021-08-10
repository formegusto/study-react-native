import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import mito from "../../assets/image/mito.jpg";
import SpotifyPalette from "../../styles/Palette";

type Props = {
  onPlayer: () => void;
};

function SmallPlayer({ onPlayer }: Props) {
  return (
    <PlayerView.View activeOpacity={0.9} onPress={onPlayer}>
      <PlayerView.AlbumArt source={mito} resizeMode="cover" />
      <PlayerView.Music>
        <PlayerView.Title>Scaredy Cat</PlayerView.Title>
        <PlayerView.Artist>DPR IAN</PlayerView.Artist>
      </PlayerView.Music>
      <PlayerView.IconView>
        <Ionicons name="pause" size={28} color={SpotifyPalette["White"]} />
      </PlayerView.IconView>
    </PlayerView.View>
  );
}

const PlayerView = {
  View: styled.TouchableOpacity`
    flex-direction: row;
    position: absolute;
    bottom: 80px;
    margin: 0 8px 0;
    width: ${Dimensions.get("screen").width - 16}px;
    padding: 8px 8px;
    background-color: #191819;
    border-radius: 8px;
  `,
  Music: styled.View`
    height: 100%;
    justify-content: center;

    margin: 0 0 0 10px;
  `,
  Title: styled.Text`
    font-size: 12px;
    color: ${SpotifyPalette["White"]};
    margin: 0 0 2px;
  `,
  Artist: styled.Text`
    font-size: 12px;
    color: #b4b3b4;
  `,
  AlbumArt: styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 8px;
  `,
  IconView: styled.View`
    flex: 1;
    flex-direction: row;
    height: 100%;
    align-items: center;

    justify-content: flex-end;
  `,
};

export default SmallPlayer;
