import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { FullScreen } from "../../styles";
import SpotifyPalette from "../../styles/Palette";
import BigCard from "../../components/atoms/BigCard";
import { SmallCardGrid } from "../../components/atoms/SmallCard";
import { AllGenres, MyGenres } from "../../stores/Genre";
import { TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SharedElement } from "react-navigation-shared-element";

type Props = {
  navigation: StackNavigationProp<any, "Main">;
};

function SearchScreen({ navigation }: Props) {
  const [intro, setIntro] = React.useState<boolean>(false);

  const onIntro = React.useCallback(() => {
    navigation.navigate("Intro");
  }, [navigation]);

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
          <View
            style={{
              paddingBottom: 15,
              backgroundColor: SpotifyPalette["Black"],
            }}
          >
            <SearchForm.View>
              <SearchForm.PrefixIcon name="search" size={20} />
              <SearchForm.Text>아티스트, 곡 또는 앨범</SearchForm.Text>
            </SearchForm.View>
          </View>
          <TouchableOpacity activeOpacity={0.9} onPress={onIntro}>
            <BigCard intro={intro} />
          </TouchableOpacity>
          <GenreTitle>가장 많이 듣는 장르</GenreTitle>
          <SmallCardGrid items={MyGenres} />
          <GenreTitle>모두 찾아보기</GenreTitle>
          <SmallCardGrid items={AllGenres} />
        </SearchView>
      </SafeAreaView>
    </FullScreen>
  );
}

const GenreTitle = styled.Text`
  margin: 30px 0;
  color: ${SpotifyPalette["White"]};
  font-size: 16px;
  font-weight: 700;
`;

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
