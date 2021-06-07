import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CounterConsumer } from "../context/CounterContext";
import Screens from "../styles/Screens";

function CounterComponent() {
  return (
    <CounterConsumer>
      {({ state, action }) => (
        <View style={Screens.Full}>
          <Text style={Styles.Count}>{state.number}</Text>
          <View style={Styles.ButtonBlock}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={Styles.CountAction}
              onPress={action.decrease}
            >
              <Text style={{ color: "#FFF" }}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={Styles.CountAction}
              onPress={action.increase}
            >
              <Text style={{ color: "#FFF" }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </CounterConsumer>
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
