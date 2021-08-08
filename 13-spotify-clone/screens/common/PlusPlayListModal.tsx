import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Modal from "react-native-modal";
import styled from "styled-components/native";
import SpotifyPalette from "../../styles/Palette";

type Props = {
  isVisible: boolean;
  changeVisible: (value: boolean) => void;
};
function PlusPlayListModal({ isVisible, changeVisible }: Props) {
  return (
    <Modal
      isVisible={isVisible}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      style={{
        position: "absolute",
        bottom: -25,
        left: -16,
        backgroundColor: SpotifyPalette["Black"],
        height: "90%",
        width: "100%",
        borderTopStartRadius: 14,
        borderTopEndRadius: 14,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <ModalView.View>
        <ModalView.Title>플레이리스트에 이름을 지정하세요.</ModalView.Title>
        <ModalView.Input
          autoFocus
          value={"내 플레이리스트 #1"}
          style={{
            borderBottomColor: "#CCC",
            borderBottomWidth: 1,
          }}
          selectionColor={"white"}
        />
      </ModalView.View>
      <ModalView.CloseBtn
        name="close"
        size={24}
        color={SpotifyPalette["White"]}
        onPress={() => changeVisible(false)}
      />
    </Modal>
  );
}

const ModalView = {
  View: styled.View`
    align-items: center;
  `,
  Title: styled.Text`
    color: ${SpotifyPalette["White"]};
    font-size: 16px;
    font-weight: 700;

    margin: 100px 0 70px;
  `,
  Input: styled.TextInput`
    width: 70%;
    font-size: 36px;
    font-weight: 700;
    color: ${SpotifyPalette["White"]};

    padding: 10px 16px;
  `,
  Submit: styled.Button``,
  CloseBtn: styled(Ionicons)`
    position: absolute;
    top: 16px;
    right: 16px;
  `,
};

export default PlusPlayListModal;
