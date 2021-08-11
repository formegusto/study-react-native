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
              inputRange: [0, 150],
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
          <Artist.Name
            style={{
              opacity: offsetY.interpolate({
                inputRange: [130, 190],
                outputRange: [1, 0],
                extrapolate: "clamp",
              }),
            }}
          >
            DPR IAN
          </Artist.Name>
        </Artist.NameView>
        <MusicContent.View>
          <MusicContent.ListenerText>
            월별 청취자 13,714명
          </MusicContent.ListenerText>
          <MusicContent.BottomView>
            <MusicContent.FollowBtn activeOpacity={0.8}>
              <MusicContent.FollowText>팔로우하기</MusicContent.FollowText>
            </MusicContent.FollowBtn>
            <Ionicons
              name="ellipsis-horizontal"
              size={24}
              color={SpotifyPalette["White"]}
            />
          </MusicContent.BottomView>
        </MusicContent.View>
        <MusicList />
        <MusicList />
        <MusicList />
      </Artist.View>

      <HeaderView.View>
        <HeaderView.BackgroundColorWrap
          style={{
            opacity: offsetY.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
              extrapolate: "clamp",
            }),
          }}
        />
        <HeaderView.TitleView>
          <HeaderView.Title
            style={{
              transform: [
                {
                  translateY: offsetY.interpolate({
                    inputRange: [0, 250],
                    outputRange: [68, 0],
                    extrapolate: "clamp",
                  }),
                },
              ],
              opacity: offsetY.interpolate({
                inputRange: [150, 250],
                outputRange: [0, 1],
                extrapolate: "clamp",
              }),
            }}
          >
            DPR IAN
          </HeaderView.Title>
        </HeaderView.TitleView>
        <HeaderView.BackIconWrap
          style={{
            transform: [
              {
                translateX: offsetY.interpolate({
                  inputRange: [0, 100],
                  outputRange: [16, 6],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        >
          <HeaderView.BackIconColorWrap
            style={{
              opacity: offsetY.interpolate({
                inputRange: [0, 100],
                outputRange: [1, 0],
                extrapolate: "clamp",
              }),
            }}
          />
          <HeaderView.BackIcon
            name="chevron-back-outline"
            size={24}
            color="#FFF"
            onPress={goBack}
          />
        </HeaderView.BackIconWrap>
      </HeaderView.View>
      <MusicContent.PlayBtnWrap
        style={{
          transform: [
            {
              translateY: offsetY.interpolate({
                inputRange: [0, 260],
                outputRange: [0, -260],
                extrapolateRight: "clamp",
              }),
            },
          ],
        }}
      >
        <MusicContent.PlayBtn
          name="caret-forward-circle"
          size={68}
          color={SpotifyPalette["Green"]}
        />
      </MusicContent.PlayBtnWrap>
    </FullScreen>
  );
}

const MusicContent = {
  View: styled.View`
    margin: 8px 0 0;
    height: 76px;

    justify-content: center;
  `,
  PlayBtnWrap: styled(Animated.View)`
    position: absolute;
    top: 314px;
    right: 12px;
  `,
  PlayBtn: styled(Ionicons)``,
  ListenerText: styled.Text`
    color: #8d8d8d;
    font-size: 12px;

    margin: 0 0 12px;
  `,
  BottomView: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  FollowBtn: styled.TouchableOpacity`
    padding: 8px 20px;

    border: 1px solid #fff;
    border-radius: 8px;

    margin: 0 30px 0 0;
    justify-content: center;
    align-items: center;
  `,
  FollowText: styled.Text`
    color: ${SpotifyPalette["White"]};
    font-size: 12px;
  `,
};
const HeaderView = {
  View: styled.View`
    position: absolute;
    top: 0;
    padding: ${getStatusBarHeight()}px 0 0;
    width: 100%;
    height: ${getStatusBarHeight() + 10}px;
  `,
  TitleView: styled.View`
    position: absolute;
    top: ${getStatusBarHeight() + 12}px;
    width: 100%;
    height: 28px;
    align-items: center;
    overflow: hidden;
  `,
  Title: styled(Animated.Text)`
    color: ${SpotifyPalette["White"]};
    font-size: 12px;
    font-weight: 700;
  `,
  BackgroundColorWrap: styled(Animated.View)`
    position: absolute;
    top: 0;
    width: 100%;
    height: ${getStatusBarHeight() + 45}px;
    background-color: ${SpotifyPalette["Black"]};
  `,
  BackIconColorWrap: styled(Animated.View)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  `,
  BackIconWrap: styled(Animated.View)`
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
    justify-content: center;
    align-items: center;
    transform: translateX(16px);
    overflow: hidden;
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
  Name: styled(Animated.Text)`
    position: absolute;
    bottom: 10px;
    color: ${SpotifyPalette["White"]};
    font-size: 48px;
    font-weight: 700;
  `,
};

export default ArtistScreen;
