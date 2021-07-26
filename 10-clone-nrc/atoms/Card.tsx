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
import image from "../assets/images/image_1.png";

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
            source={image}
            style={{ width: "100%", height: "100%", borderRadius: 16 }}
            resizeMode="cover"
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
    height: Dimensions.get("window").width - 100,
    backgroundColor: "#CCC",
    marginBottom: 10,
    borderRadius: 16,
  },
});

export default Card;
