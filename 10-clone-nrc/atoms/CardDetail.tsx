import React, { useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Animated,
  Dimensions,
  GestureResponderEvent,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GestureEvent, ScrollView } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";

type Props = {
  navigation: any;
};

function CardDetail(props: Props) {
  const [ani, setAni] = useState(0);
  // const aniCheck = useRef<number>(0);
  const num = props.navigation.getParam("num");

  const onScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    console.log(e.nativeEvent.contentOffset.y);
    setAni(e.nativeEvent.contentOffset.y * -0.08);
    // Animated.timing(ani, {
    //   toValue: ,
    //   useNativeDriver: true,
    //   delay: 0,
    // }).start();
  }, []);
  return (
    <SharedElement id={`card-${num}`}>
      <View style={styles.container}>
        <Animated.View
          style={{
            ...styles.imgContainer,
            transform: [{ translateY: ani }],
          }}
        >
          <Image
            source={{
              uri: "http://pmullen.com/codepen/pEruv9g.jpg",
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height,
            }}
          ></Image>
        </Animated.View>
        <ScrollView
          style={styles.scrollContainer}
          onScroll={onScroll}
          // onResponderMove={onScroll}
          scrollEventThrottle={30}
        >
          <View style={styles.imageWrap}></View>
          <View style={styles.portfolioConatainer}></View>
        </ScrollView>
      </View>
    </SharedElement>
  );
}

CardDetail.sharedElements = (navigation: any) => {
  const num = navigation.getParam("num");
  return [
    {
      id: `card-${num}`,
      animation: "fade",
    },
  ];
};

const styles = StyleSheet.create({
  imageWrap: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 180,
  },
  scrollContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "#CCC",
    justifyContent: "center",
    alignItems: "center",
  },
  portfolioConatainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "#000",
  },
});

export default CardDetail;
