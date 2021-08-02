import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import styled, { css } from "styled-components/native";
import { FullScreen } from "../styles";
import SpotifyPalette from "../styles/Palette";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Ionicons } from "@expo/vector-icons";
import SmallMusic from "../components/atoms/SmallMusic";
import SmallHeader from "../components/atoms/SmallHeader";
import Animated from "react-native-reanimated";

function HomeScreen() {
  const headerOffset = React.useRef<Animated.Value<number>>(
    new Animated.Value(0)
  ).current;

  return (
    <LinearGradient
      colors={[
        "rgba(25,20,20,0.65)",
        "rgba(25,20,20,0.9)",
        "rgba(25,20,20,1)",
        "rgba(25,20,20,1)",
        "rgba(25,20,20,1)",
      ]}
      start={[0, 0]}
      end={[0.7, 0.7]}
    >
      <FullScreen>
        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: headerOffset } } }],
            { useNativeDriver: true }
          )}
        >
          <Wrap style={{ height: getStatusBarHeight() }} />
          <Wrap horizontalMargin>
            <Title.View>
              <Title.Text>즐거운 오후입니다</Title.Text>
              <Title.IconView>
                <Ionicons
                  name="time-outline"
                  color={SpotifyPalette["White"]}
                  size={28}
                  style={{
                    marginRight: 12,
                  }}
                />
                <Ionicons
                  name="cog-outline"
                  color={SpotifyPalette["White"]}
                  size={28}
                />
              </Title.IconView>
            </Title.View>
            <SmallMusic />
          </Wrap>
          <Wrap horizontalMargin="onlyOne">
            <Title.View>
              <Title.Text>내 플레이리스트</Title.Text>
            </Title.View>
          </Wrap>
          <Wrap horizontalMargin="onlyOne">
            <Title.View>
              <Title.Text>힙스터 감성 충전</Title.Text>
            </Title.View>
          </Wrap>
          <Wrap horizontalMargin="onlyOne">
            <Title.View>
              <Title.Text>최근 재생한 항목</Title.Text>
            </Title.View>
          </Wrap>
          <Wrap horizontalMargin="onlyOne">
            <Title.View>
              <Title.Text>다시 들어보세요</Title.Text>
            </Title.View>
          </Wrap>
          <Wrap horizontalMargin="onlyOne">
            <Title.View>
              <Title.Text>내가 즐겨 듣는 믹스</Title.Text>
            </Title.View>
          </Wrap>
          <Wrap horizontalMargin="onlyOne">
            <Title.View>
              <Title.Text>힙합</Title.Text>
            </Title.View>
          </Wrap>
          <Wrap horizontalMargin="onlyOne">
            <Title.View>
              <Title.Text>조금만 더 열심히!</Title.Text>
            </Title.View>
          </Wrap>
          <Wrap horizontalMargin="onlyOne">
            <Title.View>
              <Title.Text>K-pop</Title.Text>
            </Title.View>
          </Wrap>
          <Wrap horizontalMargin="onlyOne">
            <Title.View>
              <Title.Text>좋아하는 아티스트</Title.Text>
            </Title.View>
          </Wrap>
          <Wrap horizontalMargin="onlyOne">
            <Title.View>
              <Title.Text>릴보이</Title.Text>
            </Title.View>
          </Wrap>
        </Animated.ScrollView>
        <SmallHeader offset={headerOffset} />
      </FullScreen>
    </LinearGradient>
  );
}

const Title = {
  View: styled.View`
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    margin: 0 0 20px;
  `,
  Text: styled.Text`
    color: ${SpotifyPalette["White"]};
    font-size: 22px;
    font-weight: 800;
    text-shadow: 1px 1px 1px #5d5d5d;
  `,
  IconView: styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
  `,
};

const Wrap = styled.View<{ horizontalMargin?: boolean | "onlyOne" }>`
  ${({ horizontalMargin }) =>
    horizontalMargin && horizontalMargin === "onlyOne"
      ? css`
          margin: 40px 0 0 16px;
        `
      : css`
          margin: 40px 16px 0;
        `}
`;

const MainScrollWrap = styled.ScrollView`
  flex: 1;
`;
const Day = {
  View: styled.View``,
};

export default HomeScreen;
