import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Dimensions, Text, View, Animated } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
// import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import FLOWERS from "../stores/Flower";
import BackIcon from "./BackIcon";
import Icon from "./Icon";

type Props = {
  route: any;
  navigation: StackNavigationProp<any, "Detail">;
};

function Detail({ route, navigation }: Props) {
  const item = route.params.flower;
  const ref = React.useRef<any>();
  const selectedItemIndex = FLOWERS.findIndex((i) => item.id === i.id);
  const mountedAnimation = React.useRef(new Animated.Value(0)).current;
  const activeIndex = React.useRef(
    new Animated.Value(selectedItemIndex)
  ).current;
  const activeIndexAnimation = React.useRef(
    new Animated.Value(selectedItemIndex)
  ).current;

  const animation = (toValue: number, delay: number = 0) =>
    Animated.timing(mountedAnimation, {
      toValue,
      duration: 500,
      delay,
      useNativeDriver: true,
    });

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(activeIndexAnimation, {
        toValue: activeIndex,
        duration: 300,
        useNativeDriver: true,
      }),
      animation(1, 1000),
    ]).start();
  }, []);

  const translateY = mountedAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackIcon
        onPress={() => {
          animation(0).start(() => {
            navigation.goBack();
          });
        }}
      />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "nowrap",
          marginVertical: 20,
        }}
      >
        {FLOWERS.map((flower, idx) => (
          <TouchableOpacity
            style={{ padding: 10 }}
            key={flower.id}
            activeOpacity={0.7}
          >
            <SharedElement id={`item.${flower.id}.icon`}>
              <Icon uri={flower.uri} />
            </SharedElement>
          </TouchableOpacity>
        ))}
      </View>
      <Animated.FlatList
        style={{
          opacity: mountedAnimation,
          transform: [{ translateY }],
        }}
        ref={ref}
        data={FLOWERS}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        nestedScrollEnabled
        getItemLayout={(data, index) => ({
          length: Dimensions.get("screen").width,
          offset: Dimensions.get("screen").width * index,
          index,
        })}
        initialScrollIndex={selectedItemIndex}
        renderItem={({ item }) => (
          <ScrollView
            style={{
              width: Dimensions.get("screen").width - 16 * 2,
              margin: 16,
              backgroundColor: "#CCC",
              borderRadius: 16,
            }}
          >
            <View
              style={{
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 16 }}>
                {Array(50).fill(`${item.name} inner text\n`)}
              </Text>
            </View>
          </ScrollView>
        )}
      />
    </SafeAreaView>
  );
}

Detail.sharedElements = (route: any, otherRoute: any, showing: any) => {
  // const { item } = route.params;
  // return [`item.${item.id}.icon`];
  return FLOWERS.map((flower) => `item.${flower.id}.icon`);
};

export default Detail;
