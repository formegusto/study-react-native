import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Animated,
  GestureResponderEvent,
  TouchableOpacity,
  View,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styled, { css } from "styled-components/native";
import { FullScreen } from "../styles";
import SpotifyPalette from "../styles/Palette";

type RefMap = {
  [key: string]: any;
};
function LibraryScreen() {
  const [selCat, setSelCat] = React.useState<string | null>(null);
  const refs = React.useRef<RefMap>({});

  const changeCat = React.useCallback((text: string | null) => {
    console.log(
      refs.current[text!].measure(
        (fx: any, fy: any, width: any, height: any, px: any, py: any) => {
          console.log("Component width is: " + width);
          console.log("Component height is: " + height);
          console.log("X offset to frame: " + fx);
          console.log("Y offset to frame: " + fy);
          console.log("X offset to page: " + px);
          console.log("Y offset to page: " + py);
        }
      )
    );
    setSelCat(text);
  }, []);

  return (
    <FullScreen dark>
      <HeaderView.Wrap>
        <HeaderView.View>
          <Profile.View>
            <Profile.Text>H</Profile.Text>
          </Profile.View>
          <HeaderView.Title>내 라이브러리</HeaderView.Title>
        </HeaderView.View>
        <CategoryView.View>
          {selCat && (
            <CategoryView.CancleBtn
              activeOpacity={0.8}
              onPress={() => changeCat(null)}
            >
              <CategoryView.CancleText>X</CategoryView.CancleText>
            </CategoryView.CancleBtn>
          )}
          {["플레이리스트", "아티스트", "앨범"].map((text, idx) => (
            <CategoryView.Category
              ref={(ref) => (refs.current[text] = ref)}
              key={idx}
              activeOpacity={0.8}
              active={selCat === text}
              onPress={() => {
                changeCat(text);
              }}
            >
              <CategoryView.Text>{text}</CategoryView.Text>
            </CategoryView.Category>
          ))}
        </CategoryView.View>
      </HeaderView.Wrap>
    </FullScreen>
  );
}

const Profile = {
  View: styled.View`
    width: 35px;
    height: 35px;
    background-color: #a995c0;
    border-radius: 20px;

    margin: 0 12px 0 0;

    justify-content: center;
    align-items: center;
  `,
  Text: styled.Text`
    font-size: 20px;
    font-weight: 600;
  `,
};
const HeaderView = {
  Wrap: styled.View`
    padding: ${getStatusBarHeight() + 20}px 16px 0;
    box-shadow: 2px 2px 4px #000;
    background-color: ${SpotifyPalette["Black"]};
  `,
  View: styled.View`
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0 0 20px;
  `,
  Title: styled.Text`
    color: ${SpotifyPalette["White"]};
    font-size: 22px;
    font-weight: 900;
  `,
};

const CategoryView = {
  View: styled(Animated.View)`
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0 0 10px;
  `,
  CancleText: styled.Text`
    font-size: 18px;
    font-weight: 300;
    color: ${SpotifyPalette["White"]};
  `,
  CancleBtn: styled.TouchableOpacity`
    width: 34px;
    height: 34px;

    margin: 0 8px 0 0;
    border: 1px solid #6c6c6c;
    border-radius: 17px;

    justify-content: center;
    align-items: center;
  `,
  Category: styled.TouchableOpacity<{ active?: boolean }>`
    padding: 10px 12px;
    border-radius: 16px;

    justify-content: center;
    align-items: center;

    margin: 0 8px 0 0;

    ${({ active }) =>
      active
        ? css`
            border: 1px solid #50a558;
            background-color: #3d8043;
          `
        : css`
            border: 1px solid #6c6c6c;
          `}
  `,
  Text: styled.Text`
    font-size: 12px;

    color: ${SpotifyPalette["White"]};
  `,
};

export default LibraryScreen;
