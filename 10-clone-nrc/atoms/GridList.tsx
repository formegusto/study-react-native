import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import GridItem from "./GridItem";

function GridList() {
  const exam_arr = Array.from({ length: 12 }).map((num, idx) => idx);
  const arr_split = exam_arr.length / 3;
  return (
    <View style={styles.rowGrid}>
      {Array.from({ length: arr_split }).map((num, idx) =>
        idx % 2 === 0 ? (
          <>
            <View style={styles.col}>
              <GridItem number={exam_arr[idx * 3]} />
            </View>
            <View style={styles.col}>
              <View style={styles.row}>
                <GridItem number={exam_arr[idx * 3 + 1]} />
              </View>
              <View style={styles.row}>
                <GridItem number={exam_arr[idx * 3 + 2]} />
              </View>
            </View>
          </>
        ) : (
          <>
            <View style={styles.col}>
              <View style={styles.row}>
                <GridItem number={exam_arr[idx * 3]} />
              </View>
              <View style={styles.row}>
                <GridItem number={exam_arr[idx * 3 + 1]} />
              </View>
            </View>
            <View style={styles.col}>
              <GridItem number={exam_arr[idx * 3 + 2]} />
            </View>
          </>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rowGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  row: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").width / 2 / 2,
  },
  col: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").width / 2,
    // backgroundColor: "#000",
  },
  col_2: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").width / 2 / 2,
    // backgroundColor: "#000",
  },
});
export default GridList;
