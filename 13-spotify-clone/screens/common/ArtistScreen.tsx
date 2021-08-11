import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";
import dprian from "../../assets/image/dprian.jpg";
import MusicList from "../../components/atoms/MusicList";
import { FullScreen } from "../../styles";
import SpotifyPalette from "../../styles/Palette";

type Props = {
  navigation: StackNavigationProp<any, "Artist">;
};
function ArtistScreen({ navigation }: Props) {
  const offsetY = React.useRef<Animated.Value<number>>(
    new Animated.Value(0)
  ).current;
  const goBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <FullScreen dark>
      <Artist.ImageView>
        <Artist.Image
          source={dprian}
          resizeMode="cover"
          style={{
            width: offsetY.interpolate({
              inputRange: [0, 200],
              outputRange: [
                Dimensions.get("screen").width + 50,
                Dimensions.get("screen").width,
              ],
              extrapolate: "clamp",
            }),
            height: offsetY.interpolate({
              inputRange: [0, 300],
              outputRange: [300, 0],
            }),
          }}
        />
        <Artist.ImageWrap
          style={{
            opacity: offsetY.interpolate({
              inputRange: [0, 125],
              outputRange: [0, 1],
              extrapolate: "clamp",
            }),
          }}
        />
      </Artist.ImageView>

      <Artist.View
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offsetY } } }],
          { useNativeDriver: true }
        )}
      >
        <Artist.NameView>
          <Artist.Name>DPR IAN</Artist.Name>
        </Artist.NameView>
        <MusicList />
        <MusicList />
        <MusicList />
      </Artist.View>

      <HeaderView.View>
        <HeaderView.BackIcon
          name="chevron-back-outline"
          size={24}
          color="#FFF"
          onPress={goBack}
        />
      </HeaderView.View>
    </FullScreen>
  );
}

const HeaderView = {
  View: styled.View`
    position: absolute;
    top: 0;
    padding: ${getStatusBarHeight()}px 16px 0;
  `,
  BackIcon: styled(Ionicons)``,
};

const Artist = {
  View: styled(Animated.ScrollView)`
    padding: 0 16px;
  `,
  ImageView: styled.View`
    position: absolute;
    top: 0;
    width: 100%;
    align-items: center;
  `,

  Image: styled(Animated.Image)`
    width: 100%;
    height: 300px;
  `,
  ImageWrap: styled(Animated.View)`
    position: absolute;
    top: 0;
    width: 100%;
    height: 300px;
    background-color: ${SpotifyPalette["Black"]};
  `,

  NameView: styled(Animated.View)`
    height: 300px;
  `,
  Name: styled.Text`
    position: absolute;
    bottom: 10px;
    color: ${SpotifyPalette["White"]};
    font-size: 48px;
    font-weight: 700;
  `,
};

export default ArtistScreen;
