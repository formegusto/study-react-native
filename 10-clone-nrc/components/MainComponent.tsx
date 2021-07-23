import React from "react";
import { useCallback } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Card from "../atoms/Card";
import CardDetail from "../atoms/CardDetail";

type Props = {
  navigation: any;
};

function ListComponent(props: Props) {
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

const sharedNavigator = createSharedElementStackNavigator(
  {
    Home: {
      screen: ListComponent,
      navigationOptions: {
        header: null,
      },
    },
    Detail: CardDetail,
  },
  {
    initialRouteName: "Home",
  }
);

const MainApp = createAppContainer(sharedNavigator);

const MainComponent = (props: any) => <MainApp />;

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
