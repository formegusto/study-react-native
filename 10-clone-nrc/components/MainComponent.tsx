import React from "react";
import { useCallback } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Card from "../atoms/Card";

type Props = {
  navigation: any;
};

function MainComponent(props: Props) {
  const onHero = useCallback((num: number) => {
    props.navigation.push("Detail", {
      num,
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.CardListView}>
        {Array.from({ length: 12 }).map((num, idx) => (
          <Card number={idx} key={idx} onHero={onHero} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  CardListView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    overflow: "scroll",
  },
});

export default MainComponent;
