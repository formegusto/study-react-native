import React from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { abs } from "react-native-reanimated";
import { SharedElement } from "react-navigation-shared-element";
import styled, { css } from "styled-components/native";
import hte from "../../assets/image/happierthanever.jpg";

type Props = {
  intro: boolean;
};

function BigCard({ intro }: Props) {
  return (
    <Card.View>
      <SharedElement id="intro">
        <Card.Image source={hte} resizeMode="cover" />
      </SharedElement>
      <SharedElement id="intro-shadow" style={StyleSheet.absoluteFill}>
        <Card.ImageWrap />
      </SharedElement>
      <Card.ContentView>
        <SharedElement id="title">
          <Card.Title intro={intro}>Happier Than Ever를 소개합니다</Card.Title>
        </SharedElement>
        <SharedElement id="desc">
          <Card.Desc intro={intro}>
            Billie가 엄선한 3가지 특별한 음악 여행을 떠나보세요
          </Card.Desc>
        </SharedElement>
      </Card.ContentView>
    </Card.View>
  );
}

const Card = {
  View: styled.View`
    width: ${Dimensions.get("screen").width - 32}px;
    height: ${(Dimensions.get("screen").width - 32) / 1.5}px;

    margin: 15px 0 0;

    border-radius: 8px;
    overflow: hidden;
  `,
  Image: styled.Image`
    width: 100%;
    height: 100%;
  `,
  ImageWrap: styled.View`
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: rgba(33, 33, 33, 0.5);
  `,
  ContentView: styled.View`
    justify-content: flex-end;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    padding: 16px;
  `,
  Title: styled.Text<{ intro: boolean }>`
    color: #aea799;
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 6px;

    ${({ intro }) =>
      intro
        ? css`
            opacity: 0;
          `
        : css`
            opacity: 1;
          `}
  `,
  Desc: styled.Text<{ intro: boolean }>`
    color: #9b9b9b;
    font-size: 10px;
    font-weight: 600;

    ${({ intro }) =>
      intro
        ? css`
            opacity: 0;
          `
        : css`
            opacity: 1;
          `}
  `,
};

export default BigCard;
