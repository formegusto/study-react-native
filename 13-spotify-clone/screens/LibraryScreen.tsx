import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Animated, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";
import Categories from "../stores/Category";
import { FullScreen } from "../styles";
import SpotifyPalette from "../styles/Palette";
import CategoryList from "./common/CategoryList";
import LibraryList from "./common/LibraryList";

type RefMap = {
  [key: string]: any;
};
function LibraryScreen() {
  // const changeCat = React.useCallback((text: string | null) => {
  //   console.log(
  //     refs.current[text!].measure(
  //       (fx: any, fy: any, width: any, height: any, px: any, py: any) => {
  //         console.log("Component width is: " + width);
  //         console.log("Component height is: " + height);
  //         console.log("X offset to frame: " + fx);
  //         console.log("Y offset to frame: " + fy);
  //         console.log("X offset to page: " + px);
  //         console.log("Y offset to page: " + py);
  //       }
  //     )
  //   );
  //   setSelCat(text);
  // }, []);
  const offset = React.useRef<Animated.Value>(new Animated.Value(0)).current;

  return (
    <FullScreen dark>
      <LibraryWrap
        stickyHeaderIndices={[0]}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: offset } },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        <HeaderView.Wrap>
          <HeaderView.CategoryWrap
            style={{
              transform: [
                {
                  translateY: offset.interpolate({
                    inputRange: [0, 38],
                    outputRange: [0, -38],
                    extrapolate: "clamp",
                  }),
                },
              ],
            }}
          >
            <HeaderView.CategoryOpacityWrap
              style={{
                opacity: offset.interpolate({
                  inputRange: [0, 20],
                  outputRange: [1, 0],
                  extrapolate: "clamp",
                }),
              }}
            >
              <CategoryList categories={Categories} />
            </HeaderView.CategoryOpacityWrap>
          </HeaderView.CategoryWrap>
          <HeaderView.View>
            <Profile.View>
              <Profile.Text>H</Profile.Text>
            </Profile.View>
            <HeaderView.Title>내 라이브러리</HeaderView.Title>
          </HeaderView.View>
        </HeaderView.Wrap>
        <PaddingView />
        <LibraryList />
        <LibraryList />
      </LibraryWrap>
    </FullScreen>
  );
}

const PaddingView = styled.View`
  height: 38px;
`;
const LibraryWrap = styled(Animated.ScrollView)``;

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
    /* box-shadow: 4px 4px 4px #000; */
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
  CategoryWrap: styled(Animated.View)`
    position: absolute;
    bottom: -34px;
    width: ${Dimensions.get("screen").width}px;
    background-color: ${SpotifyPalette["Black"]};
    padding: 0 16px 0;
    box-shadow: 0px 4px 2px #000;
  `,
  CategoryOpacityWrap: styled(Animated.View)``,
};

export default LibraryScreen;
