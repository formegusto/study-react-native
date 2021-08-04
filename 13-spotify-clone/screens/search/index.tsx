import React from "react";
import { createAppContainer } from "react-navigation";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import IntroScreen from "./IntroScreen";
import SearchScreen from "./SearchScreen";

const Shared = createSharedElementStackNavigator(
  {
    Main: SearchScreen,
    Intro: {
      screen: IntroScreen,
      navigationOptions: {
        gestureEnabled: false,
        transitionSpec: {
          open: { animation: "timing", config: { duration: 300 } },
          close: { animation: "timing", config: { duration: 300 } },
        },
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
      },
    },
  },
  {
    headerMode: "none",
  },
  {}
);

const SearchApp = createAppContainer(Shared);

const SearchStack = (props: any) => <SearchApp />;

export default SearchStack;
