import { StatusBar } from "expo-status-bar";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./atoms/CarouselItem";
import items from "./store";
import { Item } from "./types";

function App() {
  const refCarousel = useRef<Carousel<Item>>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselBlock}>
        <Carousel
          ref={refCarousel}
          data={items}
          renderItem={CarouselItem}
          sliderWidth={300}
          sliderHeight={300}
          itemWidth={275}
          slideStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  carouselBlock: {
    width: 300,
    height: 350,
    position: "absolute",
    bottom: 32,
  },
});

export default App;
