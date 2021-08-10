import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Animated, Dimensions, StatusBar, StyleSheet } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import styled from "styled-components/native";
import SpotifyPalette from "../../../styles/Palette";
import mito from "../../../assets/image/mito.jpg";
import { getStatusBarHeight } from "react-native-status-bar-height";

type Props = {
  navigation: StackNavigationProp<any, "Lyrics">;
};
function LyricsScreen({ navigation }: Props) {
  const offset = React.useRef<Animated.Value>(new Animated.Value(0)).current;

  React.useState(() => {
    Animated.timing(offset, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    () => {};
  });

  const onClose = React.useCallback(() => {
    Animated.timing(offset, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    navigation.goBack();
  }, []);

  return (
    <Lyrics.Wrap style={[StyleSheet.absoluteFill]}>
      <StatusBar hidden={true} />
      <Lyrics.Header
        style={{
          transform: [
            {
              translateY: offset.interpolate({
                inputRange: [0, 1],
                outputRange: [-150, 0],
              }),
            },
          ],
          opacity: offset.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}
      >
        <HeaderView.CloseBtn activeOpacity={0.8} onPress={onClose}>
          <HeaderView.Close
            name="close"
            size={24}
            color={SpotifyPalette["White"]}
          />
        </HeaderView.CloseBtn>
        <HeaderView.ContentWrap>
          <HeaderView.ImageWrap>
            <HeaderView.Image source={mito} resizeMode="cover" />
          </HeaderView.ImageWrap>
          <HeaderView.TextWrap>
            <HeaderView.Title>Scaredy Cat</HeaderView.Title>
            <HeaderView.Artist>DPR IAN</HeaderView.Artist>
          </HeaderView.TextWrap>
        </HeaderView.ContentWrap>
      </Lyrics.Header>
      <SharedElement id="view">
        <Lyrics.View></Lyrics.View>
      </SharedElement>
      <Lyrics.Fotter
        style={{
          transform: [
            {
              translateY: offset.interpolate({
                inputRange: [0, 1],
                outputRange: [150, 0],
              }),
            },
          ],
          opacity: offset.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}
      />
    </Lyrics.Wrap>
  );
}

const HeaderView = {
  CloseBtn: styled.TouchableOpacity`
    position: absolute;
    top: 28px;
    right: 28px;

    padding: 4px;
    border-radius: 30px;
    background-color: rgba(33, 33, 33, 0.5);
  `,
  Close: styled(Ionicons)``,
  ContentWrap: styled.View`
    position: absolute;
    left: 16px;
    top: ${getStatusBarHeight() + 20}px;
    flex-direction: row;
    align-items: center;
  `,
  ImageWrap: styled.View`
    box-shadow: 0px 0px 4px #333333;
  `,
  Image: styled.Image`
    width: 65px;
    height: 65px;
  `,
  TextWrap: styled.View`
    margin: 0 0 0 16px;
  `,
  Title: styled.Text`
    font-size: 14px;
    font-weight: 700;
    color: ${SpotifyPalette["White"]};
    margin: 0 0 2px;
  `,
  Artist: styled.Text`
    font-size: 10px;
    color: ${SpotifyPalette["White"]};
  `,
};

const Lyrics = {
  Wrap: styled.View``,
  Header: styled(Animated.View)`
    position: absolute;
    top: 0;
    width: 100%;
    height: 150px;
    background-color: #8d8d8d;
  `,
  View: styled.View`
    position: absolute;
    top: 150px;
    width: 100%;
    height: ${Dimensions.get("screen").height - 300}px;
    background-color: #8d8d8d;
  `,
  Fotter: styled(Animated.View)`
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 150px;
    background-color: #8d8d8d;
  `,
};

export default LyricsScreen;
