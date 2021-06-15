import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconMenuType } from "../store/IconMenus";

type Props = {
  icon: IconMenuType;
};
function IconMenu(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon} />
      <Text style={styles.text}>{props.icon.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    color: "#686868",
    fontSize: 12,
  },
});

export default IconMenu;
