import React from "react";
import { Animated, View } from "react-native";
import styled, { css } from "styled-components/native";
import { Category } from "../../stores/Category";
import SpotifyPalette from "../../styles/Palette";

type ItemProps = {
  category: Category;
  selCat: string | null;
  setCat: (id: string) => void;
};

function CategoryItem({ category, selCat, setCat }: ItemProps) {
  const ref = React.useRef<View | null>();
  const offset = React.useRef<Animated.Value>(new Animated.Value(0)).current;
  const opacity = React.useRef<Animated.Value>(new Animated.Value(0)).current;
  const [move, setMove] = React.useState<number>(0);

  React.useEffect(() => {
    ref.current?.measure((fx: number) => {
      setMove(fx * -1 + 42);
    });
  }, []);

  const changeOpacity = React.useCallback((value: number) => {
    Animated.timing(opacity, {
      toValue: value,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const changeOffset = React.useCallback((value: number) => {
    Animated.timing(offset, {
      toValue: value,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  React.useEffect(() => {
    if (selCat === null) {
      changeOpacity(0);
      changeOffset(0);
    } else {
      if (selCat !== category.id) {
        changeOpacity(1);
      } else {
        changeOffset(1);
      }
    }
  }, [selCat]);

  const onPress = React.useCallback(() => {
    if (selCat === null) setCat(category.id);
  }, [category, selCat]);

  return (
    <Item.View
      ref={ref}
      style={{
        opacity: opacity.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        }),
        transform: [
          {
            translateX: offset.interpolate({
              inputRange: [0, 1],
              outputRange: [0, move],
            }),
          },
        ],
      }}
    >
      <Item.Btn
        activeOpacity={0.8}
        onPress={onPress}
        active={category.id === selCat}
      >
        <Item.Text>{category.name}</Item.Text>
      </Item.Btn>
    </Item.View>
  );
}

const Item = {
  View: styled(Animated.View)``,
  Btn: styled.TouchableOpacity<{ active?: boolean }>`
    padding: 10px 12px;
    border-radius: 16px;

    justify-content: center;
    align-items: center;

    margin: 0 8px 0 0;

    ${({ active }) =>
      active
        ? css`
            border: 1px solid #50a558;
            background-color: #3d8043;
          `
        : css`
            border: 1px solid #6c6c6c;
          `}
  `,
  Text: styled.Text`
    font-size: 12px;
    color: ${SpotifyPalette["White"]};
  `,
};

type CancleProps = {
  selCat: string | null;
  setCat: (id: string | null) => void;
};

function CancleButton({ selCat, setCat }: CancleProps) {
  const opacity = React.useRef<Animated.Value>(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Cancle.View
      style={{
        opacity: opacity.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      }}
    >
      <Cancle.Btn onPress={() => setCat(null)}>
        <Cancle.Text>X</Cancle.Text>
      </Cancle.Btn>
    </Cancle.View>
  );
}

const Cancle = {
  View: styled(Animated.View)`
    position: absolute;
    top: 0;
  `,
  Btn: styled.TouchableOpacity`
    width: 34px;
    height: 34px;
    border-radius: 17px;

    justify-content: center;
    align-items: center;

    border: 1px solid #6c6c6c;
  `,
  Text: styled.Text`
    font-size: 12px;
    color: ${SpotifyPalette["White"]};
  `,
};

type ListProps = {
  categories: Category[];
};

function CategoryList({ categories }: ListProps) {
  const [selCat, setSelCat] = React.useState<string | null>(null);

  const setCat = React.useCallback((id: string | null) => {
    setSelCat(id);
  }, []);

  return (
    <CategoryView.View>
      {categories.map((c) => (
        <CategoryItem key={c.id} category={c} selCat={selCat} setCat={setCat} />
      ))}
      {selCat !== null && <CancleButton selCat={selCat} setCat={setCat} />}
    </CategoryView.View>
  );
}

const CategoryView = {
  View: styled(Animated.View)`
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0 0 10px;
  `,
  CancleText: styled.Text`
    font-size: 18px;
    font-weight: 300;
    color: ${SpotifyPalette["White"]};
  `,
  CancleBtn: styled.TouchableOpacity`
    width: 34px;
    height: 34px;

    margin: 0 8px 0 0;
    border: 1px solid #6c6c6c;
    border-radius: 17px;

    justify-content: center;
    align-items: center;
  `,
  Category: styled.TouchableOpacity<{ active?: boolean }>`
    padding: 10px 12px;
    border-radius: 16px;

    justify-content: center;
    align-items: center;

    margin: 0 8px 0 0;

    ${({ active }) =>
      active
        ? css`
            border: 1px solid #50a558;
            background-color: #3d8043;
          `
        : css`
            border: 1px solid #6c6c6c;
          `}
  `,
  Text: styled.Text`
    font-size: 12px;

    color: ${SpotifyPalette["White"]};
  `,
};

export default CategoryList;
