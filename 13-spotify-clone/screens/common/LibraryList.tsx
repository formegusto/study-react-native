import React from "react";
import styled, { css } from "styled-components/native";
import mito from "../../assets/image/mito.jpg";
import memories from "../../assets/image/memories.jpg";
import jaypark from "../../assets/image/jay.jpg";
import simon from "../../assets/image/sd.jpg";
import action from "../../assets/image/action.jpg";
import dprian from "../../assets/image/dprian.jpg";
import tree from "../../assets/image/tree.jpg";
import Libraries, { Library } from "../../stores/Library";

type ItemProps = {
  library: Library;
};

function LibraryItem({ library }: ItemProps) {
  return (
    <Item.View>
      <Item.Image
        source={library.image}
        resizeMode="cover"
        isRadius={library.type === "artist"}
      />
      <Item.TextWrap>
        <Item.Title>{library.title}</Item.Title>
        <Item.TypeTitle>
          {library.typeTitle}
          {library.typeSubTitle && `∙ ${library.typeSubTitle}`}
        </Item.TypeTitle>
      </Item.TextWrap>
    </Item.View>
  );
}

const Item = {
  View: styled.View`
    flex-direction: row;
    margin: 0 0 10px;
    align-items: center;
  `,
  Image: styled.Image<{ isRadius: boolean }>`
    width: 76px;
    height: 76px;
    margin: 0 14px 0 0;

    ${({ isRadius }) =>
      isRadius &&
      css`
        border-radius: 38px;
      `}
  `,
  TextWrap: styled.View``,
  Title: styled.Text`
    color: #fff;
    font-size: 14px;
    margin: 0 0 2px;
  `,
  TypeTitle: styled.Text`
    color: #858585;
    font-size: 10px;
  `,
};

function LibraryList() {
  return (
    <List.View>
      {Libraries.map((l) => (
        <LibraryItem library={l} key={l.id} />
      ))}
    </List.View>
  );
}

const List = {
  View: styled.View`
    padding: 14px 16px 0;
  `,
};

export default LibraryList;
