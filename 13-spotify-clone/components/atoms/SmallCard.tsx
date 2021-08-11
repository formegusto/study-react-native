import React from "react";
import { Dimensions } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import styled, { css } from "styled-components/native";
import SpotifyPalette from "../../styles/Palette";

type ItemProps = {
  item: any;
  isMargin: boolean;
  onPress?: (item: any) => void;
};

function SmallCard({ item, isMargin, onPress }: ItemProps) {
  return (
    <Card.View
      color={item.color}
      isMargin={isMargin}
      onPress={onPress ? () => onPress(item) : () => null}
    >
      <Card.Title>{item.title}</Card.Title>
    </Card.View>
  );
}

const Card = {
  View: styled.TouchableOpacity<{ color: string; isMargin: boolean }>`
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
  navigation?: (item: any) => void;
};

function SmallCardGrid({ items, navigation }: GridProps) {
  return (
    <Grid.View>
      {items?.map((item, idx) => (
        <SharedElement id={item.title} key={item.title}>
          <SmallCard item={item} isMargin={idx % 2 == 0} onPress={navigation} />
        </SharedElement>
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
