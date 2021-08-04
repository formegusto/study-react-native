import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackIcon onPress={() => navigation.goBack()} />
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
      <FlatList
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
