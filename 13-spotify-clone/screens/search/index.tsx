import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import IntroScreen from "./IntroScreen";
import SearchScreen from "./SearchScreen";

const Shared = createSharedElementStackNavigator();

const SearchStack = (props: any) => {
  return (
    <Shared.Navigator initialRouteName="Main" headerMode="none">
      <Shared.Screen name="Main" component={SearchScreen} />
      <Shared.Screen
        name="Intro"
        component={IntroScreen}
        options={{
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
        }}
        sharedElementsConfig={() => [
          { id: "intro" },
          { id: "intro-shadow" },
          { id: "title", animation: "fade" },
          { id: "desc", animation: "fade" },
        ]}
      />
    </Shared.Navigator>
  );
};

export default SearchStack;
