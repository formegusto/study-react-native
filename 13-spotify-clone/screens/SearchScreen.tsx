import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { FullScreen } from "../styles";
import SpotifyPalette from "../styles/Palette";
import BigCard from "./common/BigCard";

function SearchScreen() {
  return (
    <FullScreen dark>
      <SafeAreaView>
        <SearchView stickyHeaderIndices={[1]}>
          <Title.View>
            <Title.Text>검색하기</Title.Text>
            <Title.IconView>
              <Title.Icon name="camera-outline"></Title.Icon>
            </Title.IconView>
          </Title.View>
          <SearchForm.View>
            <SearchForm.PrefixIcon name="search" size={20} />
            <SearchForm.Text>아티스트, 곡 또는 앨범</SearchForm.Text>
          </SearchForm.View>
          <BigCard />
        </SearchView>
      </SafeAreaView>
    </FullScreen>
  );
}

const SearchForm = {
  View: styled.View`
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    background-color: ${SpotifyPalette["White"]};

    height: 40px;
    border-radius: 8px;
  `,
  Text: styled.Text``,
  PrefixIcon: styled(Ionicons)`
    margin: 0 10px 0 12px; ;
  `,
};

const Title = {
  View: styled.View`
    flex-direction: row;
    flex-wrap: nowrap;

    padding: 40px 0 0;
  `,
  Text: styled.Text`
    color: ${SpotifyPalette["White"]};
    font-weight: 700;
    font-size: 22px;
  `,
  IconView: styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `,
  Icon: styled(Ionicons)`
    color: ${SpotifyPalette["White"]};
    font-size: 24px;
    margin: 0 0 20px;
  `,
};

const SearchView = styled.ScrollView`
  padding: 0 16px;
`;

export default SearchScreen;
