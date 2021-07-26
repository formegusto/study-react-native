import React from "react";
import { useCallback } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Card from "../atoms/Card";
import CardDetail from "../atoms/CardDetail";
import background from "../assets/images/image_2.png";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

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
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        source={background}
        resizeMode="cover"
        style={styles.ImageContainer}
      />
      <ScrollView style={styles.CardListView} stickyHeaderIndices={[1]}>
        <View style={{ height: 103 }} />
        <LinearGradient
          colors={["transparent", "#0112B5", "#0112B5"]}
          style={{
            paddingTop: 80,
            width: "100%",
          }}
        >
          <Text
            style={{
              color: "#D6D6D6",
              fontSize: 10,
              lineHeight: 20,
              letterSpacing: -0.24,

              marginBottom: 4,
            }}
          >
            Creative Music
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              lineHeight: 30,
              letterSpacing: -0.24,
              color: "#FFFFFF",
            }}
          >
            Creative Music
          </Text>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 20,
              letterSpacing: -0.24,
              color: "#AEAEAE",
            }}
          >
            걍 춤이나 배워보세요
          </Text>
          <View
            style={{
              marginTop: 16,
              marginBottom: 32,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                height: 40,
                borderWidth: 1.5,
                borderColor: "#CECECE",
                paddingHorizontal: 12,
                paddingVertical: 7,
                borderRadius: 16,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                  lineHeight: 20,
                  letterSpacing: 0.24,
                  color: "#FFFFFF",
                }}
              >
                BREAK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                height: 40,
                borderWidth: 1.5,
                borderColor: "#CECECE",
                paddingHorizontal: 12,
                paddingVertical: 7,
                borderRadius: 16,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                  lineHeight: 20,
                  letterSpacing: 0.24,
                  color: "#FFFFFF",
                }}
              >
                BREAK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                height: 40,
                borderWidth: 1.5,
                borderColor: "#CECECE",
                paddingHorizontal: 12,
                paddingVertical: 7,
                borderRadius: 16,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                  lineHeight: 20,
                  letterSpacing: 0.24,
                  color: "#FFFFFF",
                }}
              >
                BREAK
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#0112B5",
          }}
        >
          {Array.from({ length: 12 }).map((num, idx) => (
            <Card number={idx} key={idx} onHero={onHero} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const sharedNavigator = createSharedElementStackNavigator(
  {
    Home: {
      screen: ListComponent,
      navigationOptions: {
        headerShown: false,
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
  ImageContainer: {
    width: "100%",
    height: 320,
  },
  CardListView: {
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "scroll",
  },
});

export default MainComponent;
