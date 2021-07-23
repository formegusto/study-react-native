import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import GridList from "../atoms/GridList";

function AdComponent() {
  return (
    <ScrollView style={styles.scrollScreen}>
      <GridList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollScreen: {
    width: "100%",
    height: "100%",
  },
});

export default AdComponent;
