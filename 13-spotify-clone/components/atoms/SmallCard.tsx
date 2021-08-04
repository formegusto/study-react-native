import React from "react";
import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";
import SpotifyPalette from "../../styles/Palette";

type ItemProps = {
  item: any;
  isMargin: boolean;
};

function SmallCard({ item, isMargin }: ItemProps) {
  return (
    <Card.View color={item.color} isMargin={isMargin}>
      <Card.Title>{item.title}</Card.Title>
    </Card.View>
  );
}

const Card = {
  View: styled.View<{ color: string; isMargin: boolean }>`
    width: ${Dimensions.get("screen").width / 2 - 26}px;
    height: ${Dimensions.get("screen").width / 4}px;
    padding: 12px 16px 16px;

    border-radius: 8px;

    background-color: ${(props) => props.color};
    ${({ isMargin }) =>
      isMargin
        ? css`
            margin: 0 8px 16px 0;
          `
        : css`
            margin: 0 0 16px 8px;
          `}
  `,
  Title: styled.Text`
    color: ${SpotifyPalette["White"]};
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  `,
};

type GridProps = {
  items?: any[];
};

function SmallCardGrid({ items }: GridProps) {
  return (
    <Grid.View>
      {items?.map((item, idx) => (
        <SmallCard item={item} key={idx} isMargin={idx % 2 == 0} />
      ))}
    </Grid.View>
  );
}

const Grid = {
  View: styled.View`
    flex-direction: row;
    flex-wrap: wrap;
  `,
};

export { SmallCard, SmallCardGrid };
