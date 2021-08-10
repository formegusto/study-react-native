import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import LyricsScreen from "./LyricsScreen";
import PlayerScreen from "./PlayerScreen";

const Shared = createSharedElementStackNavigator();

const PlayerStack = () => {
  return (
    <Shared.Navigator
      initialRouteName="Player"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Shared.Screen name="Player" component={PlayerScreen} />
      <Shared.Screen
        name="Lyrics"
        component={LyricsScreen}
        sharedElementsConfig={() => [{ id: "view" }]}
        options={{
          cardStyle: { backgroundColor: "transparent" },
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
      />
    </Shared.Navigator>
  );
};

export default PlayerStack;
