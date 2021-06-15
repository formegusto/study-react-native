import React from "react";
import { StyleSheet, View } from "react-native";
import IconMenus from "../store/IconMenus";
import IconMenu from "./IconMenu";

function IconMenuGroup() {
  return (
    <View style={styles.container}>
      <View style={styles.iconMenuGrp}>
        {IconMenus.slice(0, 4).map((icon, idx) => (
          <IconMenu icon={icon} />
        ))}
      </View>
      <View style={styles.iconMenuGrp}>
        {IconMenus.slice(4, 7).map((icon, idx) => (
          <IconMenu icon={icon} />
        ))}
        <View
          style={{
            flex: 1,
            // borderWidth: 1,
            // borderStyle: "dotted",
            // borderColor: "#60",
          }}
        ></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  iconMenuGrp: {
    flexDirection: "row",
    marginBottom: 16,
  },
});

export default IconMenuGroup;
