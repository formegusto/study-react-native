import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import hte from "../../assets/image/happierthanever.jpg";

function BigCard() {
  return (
    <Card.View>
      <Card.Image source={hte} resizeMode="cover" />
      <Card.ContentView>
        <Card.Title>Happier Than Ever를 소개합니다</Card.Title>
        <Card.Desc>
          Billie가 엄선한 3가지 특별한 음악 여행을 떠나보세요
        </Card.Desc>
      </Card.ContentView>
    </Card.View>
  );
}

const Card = {
  View: styled.View`
    width: ${Dimensions.get("screen").width - 32}px;
    height: ${(Dimensions.get("screen").width - 32) / 1.5}px;

    margin: 30px 0;

    border-radius: 8px;
    overflow: hidden;
  `,
  Image: styled.Image`
    width: 100%;
    height: 100%;
  `,
  ContentView: styled.View`
    justify-content: flex-end;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    padding: 16px;
    background-color: rgba(33, 33, 33, 0.5);
  `,
  Title: styled.Text`
    color: #aea799;
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 6px;
  `,
  Desc: styled.Text`
    color: #9b9b9b;
    font-size: 10px;
    font-weight: 600;
  `,
};

export default BigCard;
