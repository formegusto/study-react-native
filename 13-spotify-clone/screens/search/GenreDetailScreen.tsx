import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { SharedElement } from "react-navigation-shared-element";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import styled from "styled-components/native";
import { AllGenres, Genre, MyGenres } from "../../stores/Genre";
import { FullScreen } from "../../styles";
import SpotifyPalette from "../../styles/Palette";
import LibraryList from "../common/LibraryList";

type Props = {
  route: any;
  navigation: StackNavigationProp<any, "GenreDetail">;
};
function GenreDetailScreen({ route, navigation }: Props) {
  const [item, setItem] = React.useState<Genre>(route.params.item);
  const [selectedIdx, setSelectedIdx] = React.useState<number>(
    [...MyGenres, ...AllGenres].findIndex((genre) => item.title === genre.title)
  );

  const ref = React.useRef<ScrollView>();
  React.useEffect(() => {
    ref.current?.scrollTo({
      x: (Dimensions.get("screen").width / 2 - 20) * selectedIdx,
      animated: false,
    });
  }, [selectedIdx]);

  const onSelect = (item: Genre) => {
    setSelectedIdx(
      [...MyGenres, ...AllGenres].findIndex(
        (genre) => item.title === genre.title
      )
    );
    setItem(item);
  };

  return (
    <FullScreen dark style={StyleSheet.absoluteFill}>
      <GenreDetail.View>
        <GenreDetail.Header>
          <GenreDetail.Title>{item.title}</GenreDetail.Title>
          <GenreDetail.CloseBtn
            name="close"
            color={SpotifyPalette["White"]}
            size={28}
            onPress={() => navigation.goBack()}
          />
          <GenreList.View
            ref={ref}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {[...MyGenres, ...AllGenres].map((item) => (
              <SharedElement id={item.title} key={item.title}>
                <GenreList.Item
                  activeOpacity={0.8}
                  color={item.color}
                  onPress={() => onSelect(item)}
                >
                  <GenreList.ItemText>{item.title}</GenreList.ItemText>
                </GenreList.Item>
              </SharedElement>
            ))}
          </GenreList.View>
        </GenreDetail.Header>
        <GenreDetail.LibraryView>
          <LibraryList />
          <LibraryList />
        </GenreDetail.LibraryView>
      </GenreDetail.View>
    </FullScreen>
  );
}

const GenreDetail = {
  View: styled.View`
    padding: ${getStatusBarHeight()}px 0 0;
    flex: 1;
  `,
  Header: styled.View`
    padding: 0 0 16px 16px;

    background-color: ${SpotifyPalette["Black"]};
    box-shadow: 0 5px 2px rgba(0, 0, 0, 0.3);
  `,
  Title: styled.Text`
    color: ${SpotifyPalette["White"]};
    font-size: 28px;
    line-height: 30px;
    height: 72px;
    font-weight: 700;
    padding: 0 0 12px;
  `,
  CloseBtn: styled(Ionicons)`
    position: absolute;
    right: 16px;
  `,
  LibraryView: styled(Animated.ScrollView)``,
};

const GenreList = {
  View: styled(Animated.ScrollView)``,
  Item: styled.TouchableOpacity<{ color: string }>`
    width: ${Dimensions.get("screen").width / 2 - 28}px;
    height: ${Dimensions.get("screen").width / 4}px;
    padding: 12px 16px 16px;

    border-radius: 8px;

    background-color: ${({ color }) => color};
    margin: 0 8px 0 0;
  `,
  ItemText: styled.Text`
    color: ${SpotifyPalette["White"]};
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  `,
};

export default GenreDetailScreen;
