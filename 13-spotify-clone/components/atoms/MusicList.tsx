import React from "react";
import { ListRenderItemInfo, Text } from "react-native";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import SpotifyPalette from "../../styles/Palette";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

type Music = {
  id: string;
  title: string;
  artists: string[];
};
const MITO: Music[] = [
  {
    id: "123124",
    title: "MITO",
    artists: ["DPR IAN"],
  },
  {
    id: "31235423",
    title: "So Beautiful",
    artists: ["DPR IAN"],
  },
  {
    id: "1324123",
    title: "Dope Lovers",
    artists: ["DPR IAN"],
  },
  {
    id: "%435432",
    title: "No Blueberries",
    artists: ["DPR IAN", "DPR LIVE", "CL"],
  },
  {
    id: "4324302",
    title: "Nerves",
    artists: ["DPR IAN"],
  },
  {
    id: "59439",
    title: "Scaredy Cat",
    artists: ["DPR IAN"],
  },
  {
    id: "543991",
    title: "Welcome To The Show",
    artists: ["DPR IAN"],
  },
  {
    id: "32454",
    title: "No Silhouette",
    artists: ["DPR IAN"],
  },
];

function MusicItem(props: React.PropsWithChildren<Music>) {
  return (
    <ItemView.View>
      <ItemView.Info>
        <ItemView.Title>{props.title}</ItemView.Title>
        <ItemView.Aritsts>{props.artists.join(",")}</ItemView.Aritsts>
      </ItemView.Info>
      <Ionicons
        name="ellipsis-horizontal"
        size={24}
        color={SpotifyPalette["White"]}
      />
    </ItemView.View>
  );
}

const ItemView = {
  View: styled.View`
    margin: 24px 0 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  IconView: styled.View``,
  Info: styled.View``,
  Title: styled.Text`
    color: ${SpotifyPalette["White"]};
    margin: 0 0 3px;
  `,
  Aritsts: styled.Text`
    font-size: 12px;
    color: #b3b4b3;
  `,
};

function MusicList() {
  return (
    <View>
      {MITO.map((mi, idx) => (
        <MusicItem key={mi.id} {...mi} />
      ))}
    </View>
  );
}

export default MusicList;
