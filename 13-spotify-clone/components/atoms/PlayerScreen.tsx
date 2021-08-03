import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import SpotifyPalette from "../../styles/Palette";
import { Video } from "expo-av";
import scaredycat from "../../assets/video/scaredy-cat.mov";
import { useEffect } from "react";
import { FullScreen } from "../../styles";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

type Props = {
  offset: Animated.Value;
  offPlayer: () => void;
};

function PlayerScreen({ offset, offPlayer }: Props) {
  const refVideo = React.useRef<Video>(null);

  useEffect(() => {
    refVideo.current?.playAsync();
  }, []);

  return (
    <Wrap
      style={{
        transform: [
          {
            translateY: offset.interpolate({
              inputRange: [0, 100],
              outputRange: [Dimensions.get("screen").height, 0],
            }),
          },
        ],
      }}
    >
      <PlayerView>
        <Header.Wrap>
          <VideoView>
            <MusicVideo
              ref={refVideo}
              source={scaredycat}
              isLooping
              resizeMode="cover"
              isMuted
            />
          </VideoView>
          <Header.View>
            <Ionicons
              name="chevron-down-outline"
              size={28}
              onPress={offPlayer}
              color={SpotifyPalette["White"]}
            />
            <Header.AlbumTitle>Moodswings in This Order</Header.AlbumTitle>
            <Ionicons
              name="ellipsis-horizontal"
              size={24}
              color={SpotifyPalette["White"]}
            />
          </Header.View>
        </Header.Wrap>
        <LinearGradient
          colors={[
            "rgba(25,20,20,0.3)",
            "rgba(25,20,20,0.3)",
            "rgba(25,20,20,0.3)",
            "rgba(25,20,20,1)",
            "rgba(25,20,20,1)",
            "rgba(25,20,20,1)",
          ]}
          start={[0, 0]}
          end={[0, 1]}
        >
          <ContentView.Wrap>
            <MusicView.Wrap>
              <View
                style={{
                  marginBottom: 30,
                }}
              >
                <MusicView.Title>Scaredy Cat</MusicView.Title>
                <MusicView.Artist>DPR IAN</MusicView.Artist>
              </View>
              <MusicView.IconView>
                <MusicView.Icons
                  name="shuffle"
                  size={36}
                  color={SpotifyPalette["White"]}
                />
                <MusicView.Icons
                  name="play-skip-back"
                  size={48}
                  color={SpotifyPalette["White"]}
                />
                <MusicView.Icons
                  name="md-play-circle"
                  size={88}
                  color={SpotifyPalette["White"]}
                />
                <MusicView.Icons
                  name="play-skip-forward"
                  size={48}
                  color={SpotifyPalette["White"]}
                />
                <MusicView.Icons
                  name="sync"
                  size={36}
                  color={SpotifyPalette["White"]}
                />
              </MusicView.IconView>
            </MusicView.Wrap>
            <LyricsView></LyricsView>
          </ContentView.Wrap>
        </LinearGradient>
      </PlayerView>
    </Wrap>
  );
}

const PlayerView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const LyricsView = styled.View`
  height: 500px;
`;

const MusicView = {
  Wrap: styled.View``,
  Title: styled.Text`
    font-size: 22px;
    font-weight: 700;
    color: ${SpotifyPalette["White"]};
    margin: 0 0 6px;
  `,
  Artist: styled.Text`
    font-size: 14px;
    color: ${SpotifyPalette["White"]};
  `,
  IconView: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 0 30px;
  `,
  Icons: styled(Ionicons)`
    margin: 0 auto;
  `,
};
const ContentView = {
  Wrap: styled.View`
    padding: 600px 16px 0;
  `,
};

const MusicVideo = styled(Video)`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
`;

const VideoView = styled.View`
  width: ${Dimensions.get("screen").width}px;
  height: ${Dimensions.get("screen").height}px;
`;

const Wrap = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;

  background-color: #fff;
`;

const VideoWrap = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.3);
`;

const Header = {
  Wrap: styled.View`
    position: absolute;
    top: 0;
  `,

  View: styled.View`
    position: absolute;
    top: 0;
    flex-direction: row;
    flex-wrap: nowrap;

    align-items: center;
    padding: ${getStatusBarHeight()}px 16px 0;

    width: 100%;
  `,
  AlbumTitle: styled.Text`
    flex: 1;
    text-align: center;
    font-size: 12px;
    font-weight: 700;

    color: ${SpotifyPalette["White"]};
  `,
};

export default PlayerScreen;
