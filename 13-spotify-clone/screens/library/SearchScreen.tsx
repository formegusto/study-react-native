import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Animated, Dimensions, Text } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import styled from "styled-components/native";
import { FullScreen } from "../../styles";
import SpotifyPalette from "../../styles/Palette";

type Props = {
  navigation: StackNavigationProp<any, "Search">;
};

function SearchScreen({ navigation }: Props) {
  const inputAni = React.useRef<Animated.Value>(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.timing(inputAni, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <FullScreen dark>
      <HeaderView.View>
        <HeaderView.InputView
          style={{
            transform: [
              {
                translateX: inputAni.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, Dimensions.get("screen").width - 40],
                }),
              },
            ],
          }}
        >
          <HeaderView.Input
            placeholder="내 라이브러리 검색하기"
            placeholderTextColor={SpotifyPalette["White"]}
          />
          <HeaderView.PrefixIcon
            name="search"
            size={20}
            color={SpotifyPalette["White"]}
          />
        </HeaderView.InputView>
        <CancleBtn activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <Text
            style={{
              color: "#A2A2A2",
              fontSize: 12,
            }}
          >
            취소하기
          </Text>
        </CancleBtn>
      </HeaderView.View>
    </FullScreen>
  );
}

const CancleBtn = styled.TouchableOpacity`
  height: 32px;
  justify-content: center;

  padding: 0 16px 0 16px;
  font-size: 12px;
  color: #a2a2a2;
  background-color: ${SpotifyPalette["Black"]};
`;
const HeaderView = {
  View: styled.View`
    padding: ${getStatusBarHeight() + 20}px 0 16px 16px;
    background-color: ${SpotifyPalette["Black"]};

    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    height: 112px;

    box-shadow: 0px 4px 2px #000;
  `,
  InputView: styled(Animated.View)`
    flex: 1;
    height: 32px;
    justify-content: center;
  `,
  PrefixIcon: styled(Ionicons)`
    position: absolute;
    top: 5px;
    left: 4px;
  `,
  Input: styled.TextInput`
    position: absolute;
    top: 1px;
    background-color: #282828;
    font-size: 12px;
    padding: 8px 28px;
    color: ${SpotifyPalette["White"]};
    border-radius: 8px;
    width: 100%;
  `,
};

export default SearchScreen;
