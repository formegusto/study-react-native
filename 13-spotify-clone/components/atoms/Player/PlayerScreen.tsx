import React from "react";
import { Dimensions, Text } from "react-native";
import styled, { css } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import SpotifyPalette from "../../../styles/Palette";
import { Video } from "expo-av";
import scaredycat from "../../../assets/video/scaredy-cat.mov";
import { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { ActivityIndicator } from "react-native";

type Props = {
  navigation: StackNavigationProp<any>;
};

function PlayerScreen({ navigation }: any) {
  const refVideo = React.useRef<Video>(null);
  const [videoLoading, setVideoLoading] = React.useState<boolean>(true);

  useEffect(() => {
    refVideo.current?.playAsync();
  }, []);

  return (
    <Wrap>
      <PlayerView scrollEnabled={!videoLoading}>
        <VideoView>
          <MusicVideo
            ref={refVideo}
            source={scaredycat}
            isLooping
            resizeMode="cover"
            isMuted
            onPlaybackStatusUpdate={(playbackStatus: any) => {
              if (playbackStatus.isPlaying && videoLoading)
                setVideoLoading(false);
            }}
          />
        </VideoView>
        {videoLoading && (
          <ActivityIndicator
            style={{
              position: "absolute",
              top: Dimensions.get("screen").height / 2 - 10,
              left: Dimensions.get("screen").width / 2 - 10,
            }}
          />
        )}

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
            <Header.Wrap>
              <Header.View>
                <Ionicons
                  name="chevron-down-outline"
                  size={28}
                  color={SpotifyPalette["White"]}
                  onPress={() => navigation.goBack()}
                />
                <Header.AlbumTitle>Moodswings in This Order</Header.AlbumTitle>
                <Ionicons
                  name="ellipsis-horizontal"
                  size={24}
                  color={SpotifyPalette["White"]}
                />
              </Header.View>
            </Header.Wrap>
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
                  margin
                />
                <MusicView.Icons
                  name="md-play-circle"
                  size={88}
                  color={SpotifyPalette["White"]}
                  margin
                />
                <MusicView.Icons
                  name="play-skip-forward"
                  size={48}
                  color={SpotifyPalette["White"]}
                  margin
                />
                <MusicView.Icons
                  name="sync"
                  size={36}
                  color={SpotifyPalette["White"]}
                />
              </MusicView.IconView>
            </MusicView.Wrap>
            <Lyrics.Wrap>
              <Lyrics.ViewButton
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Lyrics")}
              >
                <SharedElement id="view">
                  <Lyrics.View>
                    <Lyrics.Text>가사</Lyrics.Text>
                  </Lyrics.View>
                </SharedElement>
              </Lyrics.ViewButton>
            </Lyrics.Wrap>
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

const Lyrics = {
  Wrap: styled.View`
    padding: 0 4px 30px;
  `,
  ViewButton: styled.TouchableOpacity``,
  View: styled.View`
    height: 400px;
    background-color: #8d8d8d;
    border-radius: 10px;
    padding: 20px 10px;
  `,
  Text: styled.Text`
    font-size: 12px;
    color: ${SpotifyPalette["White"]};
    font-weight: 700;
  `,
};

const MusicView = {
  Wrap: styled.View`
    padding: 500px 0 0;
  `,
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
  Icons: styled(Ionicons)<{ margin?: boolean }>`
    ${(props) =>
      props.margin &&
      css`
        margin: 0 auto;
      `}
  `,
};
const ContentView = {
  Wrap: styled.View`
    padding: 0px 16px 0;
  `,
};

const MusicVideo = styled(Video)`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
`;

const VideoView = styled.View`
  position: absolute;
  top: 0;
  width: ${Dimensions.get("screen").width}px;
  height: ${Dimensions.get("screen").height}px;
`;

const Wrap = styled.View`
  flex: 1;

  background-color: #fff;
`;

const Header = {
  Wrap: styled.View``,

  View: styled.View`
    flex-direction: row;
    flex-wrap: nowrap;

    align-items: center;
    padding: ${getStatusBarHeight()}px 0 0;

    width: 100%;
  `,
  AlbumTitle: styled.Text`
    text-align: center;
    font-size: 12px;
    font-weight: 700;

    color: ${SpotifyPalette["White"]};

    margin: 0 auto;
  `,
};

export default PlayerScreen;
