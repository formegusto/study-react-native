import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Screens from "../styles/Screens";

type Props = {
  number: number;
  increase: () => void;
  decrease: () => void;
};

function CounterComponent(props: Props) {
  return (
    <View style={Screens.Full}>
      <Text style={Styles.Count}>{props.number}</Text>
      <View style={Styles.ButtonBlock}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={Styles.CountAction}
          onPress={props.decrease}
        >
          <Text style={{ color: "#FFF" }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={Styles.CountAction}
          onPress={props.increase}
        >
          <Text style={{ color: "#FFF" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  ButtonBlock: {
    flexDirection: "row",
    marginTop: 8,
  },
  CountAction: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#2d2d2d",
    marginHorizontal: 4,
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  Count: {
    fontSize: 96,
    fontWeight: "700",
  },
});

export default CounterComponent;
