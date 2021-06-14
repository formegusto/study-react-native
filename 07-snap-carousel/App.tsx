import { StatusBar } from "expo-status-bar";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./CarouselItem";

type Item = {
  title: string;
};

function App() {
  const refCarousel = useRef<Carousel<Item>>(null);
  const [item, setItem] = useState<any>([
    {
      title: "1",
    },
    {
      title: "2",
    },
  ]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Carousel
          ref={refCarousel}
          data={item}
          renderItem={CarouselItem}
          sliderWidth={300}
          itemWidth={300}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
