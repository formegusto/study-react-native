import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";

type Props = {
  number: number;
  onHero: (num: number) => void;
};

function Card({ number, onHero }: Props) {
  return (
    <TouchableOpacity onPress={() => onHero(number)} activeOpacity={0.8}>
      <SharedElement id={`card-${number}`}>
        <View style={styles.cardContainer}>
          <Image
            source={{
              uri: "http://pmullen.com/codepen/pEruv9g.jpg",
              width: Dimensions.get("window").width - 32,
              height: Dimensions.get("window").width,
            }}
          />
        </View>
      </SharedElement>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width - 32,
    height: Dimensions.get("window").width,
    backgroundColor: "#CCC",
    marginBottom: 10,
    borderRadius: 16,
  },
});

export default Card;
