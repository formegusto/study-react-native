import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import styled, { css } from "styled-components/native";
import { FullScreen } from "../../styles";
import SpotifyPalette from "../../styles/Palette";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Ionicons } from "@expo/vector-icons";
import SmallMusic from "../../components/atoms/SmallMusic";
import SmallHeader from "../../components/atoms/SmallHeader";
import Animated from "react-native-reanimated";
import { StackNavigationProp } from "@react-navigation/stack";
import MiddleMusic from "../../components/atoms/MiddleMusic";
import tree from "../../assets/image/tree.jpg";
import canilove from "../../assets/image/canilove.jpg";
import action from "../../assets/image/action.jpg";
import memories from "../../assets/image/memories.jpg";
import dprian from "../../assets/image/dprian.jpg";

type Props = {
  navigation: StackNavigationProp<any, "HomeIndex">;
};

const playlist_images = [tree, memories, canilove, action];
const artist_images = [dprian];

function HomeScreen({ navigation }: Props) {
  const headerOffset = React.useRef<Animated.Value<number>>(
    new Animated.Value(0)
  ).current;

  const goAlbum = React.useCallback(() => {
    navigation.push("Album");
  }, [navigation]);

  return (
    <FullScreen>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: headerOffset } } }],
          { useNativeDriver: true }
        )}
        indicatorStyle="white"
      >
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
          <Wrap style={{ height: 0 }} />
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
            <SmallMusic goAlbum={goAlbum} />
          </Wrap>
          <Wrap horizontalMargin="onlyOne">
            <Title.View>
              <Title.Text>내 플레이리스트</Title.Text>
            </Title.View>
            <MiddleMusic images={playlist_images} title="#formegusto" />
          </Wrap>
          <Wrap horizontalMargin="onlyOne">
            <Title.View>
              <Title.Text>좋아하는 아티스트</Title.Text>
            </Title.View>
            <MiddleMusic
              isRadius
              isTextCenter
              isOnlyTitle
              images={artist_images}
              title="DPR IAN"
            />
          </Wrap>
          <Wrap horizontalMargin="onlyOne">
            <Title.View>
              <Title.Text>최근 재생한 항목</Title.Text>
            </Title.View>
            <MiddleMusic images={playlist_images} title="#formegusto" />
          </Wrap>

          <Wrap horizontalMargin="onlyOne">
            <Title.View>
              <Title.Text>릴보이</Title.Text>
            </Title.View>
          </Wrap>
        </LinearGradient>
      </Animated.ScrollView>
      <SmallHeader offset={headerOffset} />
    </FullScreen>
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

export default HomeScreen;
