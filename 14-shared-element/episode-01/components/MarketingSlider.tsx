import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SLIDER_DATAS } from "../stores/Data";

function MarketingSlider() {
  return (
    <FlatList
      data={SLIDER_DATAS}
      keyExtractor={(item) => item.color}
      horizontal
      snapToInterval={200 + 16 * 2}
      contentContainerStyle={{
        paddingLeft: 10,
      }}
      decelerationRate="fast"
      renderItem={({ item }) => (
        <View style={{ backgroundColor: item.color, ...styles.Flat }}>
          <Text style={{ ...styles.Text }}>{item.title}</Text>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  Flat: {
    width: 250,
    height: 150,
    marginRight: 16,
    padding: 10,
    borderRadius: 8,
  },
  Text: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
});

export default MarketingSlider;
