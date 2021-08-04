import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import FLOWERS from "../stores/Flower";
import Icon from "./Icon";
import MarketingSlider from "./MarketingSlider";

type Props = {
  navigation: StackNavigationProp<any, "List">;
};

export default function List({ navigation }: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MarketingSlider />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
        {FLOWERS.map((flower, idx) => (
          <TouchableOpacity
            style={{ padding: 10 }}
            key={flower.id}
            activeOpacity={0.7}
            onPress={() => navigation.push("Detail", { flower })}
          >
            <SharedElement id={`item.${flower.id}.icon`}>
              <Icon uri={flower.uri} />
            </SharedElement>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
