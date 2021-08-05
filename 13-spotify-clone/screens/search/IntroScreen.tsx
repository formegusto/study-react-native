import React from "react";
import { FullScreen } from "../../styles";
import hte from "../../assets/image/happierthanever.jpg";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import styled from "styled-components/native";
import SpotifyPalette from "../../styles/Palette";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useCallback } from "react";

type Props = {
  route: any;
  navigation: StackNavigationProp<any, "Intro">;
};

function IntroScreen({ route, navigation }: Props) {
  const offIntroScreen = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Intro.View>
      <SharedElement id="intro" style={StyleSheet.absoluteFill}>
        <Intro.Image source={hte} resizeMode="cover" />
      </SharedElement>
      <SharedElement id="intro-shadow" style={StyleSheet.absoluteFill}>
        <Intro.ImageShadow />
      </SharedElement>
      <Content.Wrap>
        <Header.View>
          <Header.IconView>
            <Header.Icon name="close" onPress={offIntroScreen} />
          </Header.IconView>
        </Header.View>
        <Content.View>
          <View
            style={{
              height: Dimensions.get("screen").height / 2 + 30,
            }}
          ></View>
          <SharedElement id="title">
            <Content.Title>Happier Than Ever를 소개합니다</Content.Title>
          </SharedElement>
          <SharedElement id="desc">
            <Content.Desc>
              Billie가 엄선한 3가지 특별한 음악 여행을 떠나보세요
            </Content.Desc>
          </SharedElement>
        </Content.View>
      </Content.Wrap>
    </Intro.View>
  );
}

const Header = {
  View: styled.View`
    margin: ${getStatusBarHeight()}px 0 0;
    padding: 0 16px;
  `,
  IconView: styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
  `,
  Icon: styled(Ionicons)`
    font-size: 36px;
    color: ${SpotifyPalette["White"]};
  `,
};
const Content = {
  Wrap: styled.ScrollView`
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;

    /* background-color: rgba(33, 33, 33, 0.5); */
  `,
  View: styled.View`
    padding: 0 16px;
  `,
  Title: styled.Text`
    color: #beb7a9;
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 6px;

    text-shadow: 1px 1px 1px #333;
  `,
  Desc: styled.Text`
    color: #9b9b9b;
    font-size: 12px;
    font-weight: 600;
    text-shadow: 1px 1px 1px #333;
  `,
};
const Intro = {
  View: styled.View`
    width: 100%;
    height: 100%;
    background-color: ${SpotifyPalette["Black"]};
  `,
  Image: styled.Image`
    width: 100%;
    height: 100%;
  `,
  ImageShadow: styled.View`
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(33, 33, 33, 0.5);
  `,
};

IntroScreen.sharedElements = (route: any, otherRoute: any, showing: any) => [
  { id: "intro" },
  { id: "intro-shadow" },
  { id: "title", animation: "fade" },
  { id: "desc", animation: "fade" },
];

export default IntroScreen;
