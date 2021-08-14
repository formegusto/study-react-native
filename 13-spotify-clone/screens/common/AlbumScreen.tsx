import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { FullScreen } from "../../styles";
import { Ionicons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import mito from "../../assets/image/mito.jpg";
import dprian from "../../assets/image/dprian.jpg";
import SpotifyPalette from "../../styles/Palette";
import { StackNavigationProp } from "@react-navigation/stack";
import MusicList from "../../components/atoms/MusicList";
import Animated from "react-native-reanimated";

type Props = {
  navigation: StackNavigationProp<any, "Album">;
};

function AlbumScreen({ navigation }: Props) {
  const offset = React.useRef<Animated.Value<number>>(
    new Animated.Value(0)
  ).current;
  const goBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <FullScreen>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: true }
        )}
      >
        <LinearGradient
          colors={[
            "rgba(25,20,20,0.65)",
            "rgba(25,20,20,0.7)",
            "rgba(25,20,20,0.85)",
            "rgba(25,20,20,0.95)",
            "rgba(25,20,20,1)",
          ]}
          start={[0, 0]}
          end={[0, 0.5]}
          style={{ ...Styles.empty, paddingHorizontal: 16 }}
        >
          <Wrap>
            <Album.Title>Moodswings in This Order</Album.Title>
            <Artist.View>
              <Artist.SmallImage source={dprian} resizeMode="cover" />
              <Artist.SmallText>DPR IAN</Artist.SmallText>
            </Artist.View>
            <Album.Year>앨범 ∙ 2021</Album.Year>
            <Album.IconView>
              <Ionicons
                name="heart-sharp"
                size={28}
                color={SpotifyPalette["Green"]}
                style={Styles.marginRight}
              />
              <Ionicons
                name="arrow-down-circle-outline"
                size={28}
                color={SpotifyPalette["White"]}
                style={Styles.marginRight}
              />
              <Ionicons
                name="ellipsis-horizontal"
                size={28}
                color={SpotifyPalette["White"]}
              />
            </Album.IconView>
          </Wrap>
          <MusicList />
          <MusicList />
        </LinearGradient>
      </Animated.ScrollView>
      <AlbumImageHeader>
        <AlbumArt
          source={mito}
          resizeMode="cover"
          style={{
            opacity: offset.interpolate({
              inputRange: [0, 200],
              outputRange: [1, 0],
              extrapolate: "clamp",
            }),
            width: offset.interpolate({
              inputRange: [0, 200],
              outputRange: [250, 0],
              extrapolate: "clamp",
            }),
            height: offset.interpolate({
              inputRange: [0, 200],
              outputRange: [250, 0],
              extrapolate: "clamp",
            }),
          }}
        />
      </AlbumImageHeader>
      <AlbumNavHeader>
        <AlbumNavWrap.View
          style={{
            opacity: offset.interpolate({
              inputRange: [0, 150],
              outputRange: [0, 1],
              extrapolate: "clamp",
            }),
          }}
        >
          <AlbumNavWrap.Title
            style={{
              opacity: offset.interpolate({
                inputRange: [240, 300],
                outputRange: [0, 1],
                extrapolate: "clamp",
              }),
              transform: [
                {
                  translateY: offset.interpolate({
                    inputRange: [240, 300],
                    outputRange: [40, 0],
                    extrapolate: "clamp",
                  }),
                },
              ],
            }}
          >
            Moodswings in This Order
          </AlbumNavWrap.Title>
        </AlbumNavWrap.View>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color="#FFF"
          onPress={goBack}
        />
      </AlbumNavHeader>
      <Album.PlayButton
        style={{
          transform: [
            {
              translateY: offset.interpolate({
                inputRange: [0, 335],
                outputRange: [0, -335],
                extrapolateRight: "clamp",
              }),
            },
          ],
        }}
      >
        <Ionicons
          name="caret-forward-circle"
          size={64}
          color={SpotifyPalette["Green"]}
        />
      </Album.PlayButton>
    </FullScreen>
  );
}

const Album = {
  Title: styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: ${SpotifyPalette["White"]};
    margin: 0 0 12px;
  `,
  Year: styled.Text`
    color: #adadad;
    font-size: 10px;
    margin: 0 0 12px;
  `,
  IconView: styled.View`
    flex-direction: row;
  `,
  PlayButton: styled(Animated.View)`
    position: absolute;
    right: 16px;
    top: 390px;
  `,
};

const Artist = {
  View: styled.View`
    flex-direction: row;
    align-items: center;
    margin: 0 0 10px;
  `,
  SmallImage: styled.Image`
    width: 22px;
    height: 22px;
    border-radius: 22px;
  `,
  SmallText: styled.Text`
    font-size: 10px;
    font-weight: 700;
    color: ${SpotifyPalette["White"]};
    margin: 0 0 0 8px;
  `,
};

const Styles = StyleSheet.create({
  empty: {
    paddingTop: 330,
  },
  marginRight: {
    marginRight: 16,
  },
});

const AlbumNavHeader = styled.View`
  position: absolute;
  padding: ${getStatusBarHeight()}px 16px 0;
`;

const AlbumNavWrap = {
  View: styled(Animated.View)`
    position: absolute;
    top: 0;
    width: ${Dimensions.get("screen").width}px;
    background-color: #2b2b2b;

    /* justify-content: center; */
    align-items: center;

    overflow: hidden;

    padding: ${getStatusBarHeight() + 6}px 0 20px;
  `,
  Title: styled(Animated.Text)`
    color: ${SpotifyPalette["White"]};
    font-size: 12px;
    font-weight: 900;
  `,
};

const AlbumImageHeader = styled.View`
  position: absolute;
  top: ${getStatusBarHeight()}px;
  width: 100%;
  height: 250px;

  justify-content: flex-start;
  align-items: center;
`;

const AlbumArt = styled(Animated.Image)`
  box-shadow: 2px 2px 2px #000;
`;

const Wrap = styled.View``;

export default AlbumScreen;
