import React from "react";
import MainScreen from "./screens/MainScreen";
import DetailScreen from "./screens/DetailScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { springyFadeIn } from "./transitions/springyFadeIn";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation-tabs";
import { TransitionPresets } from "@react-navigation/stack";
import { ModalScreen } from "./screens/ModalScreen";
import { Ionicons as Icon } from "@expo/vector-icons";

enableScreens();

export const iosTransitionSpec: any = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
  },
};

const StackNavigator1 = createSharedElementStackNavigator(
  {
    Main: MainScreen,
    Detail: DetailScreen,
  },
  {
    defaultNavigationOptions: {
      transitionSpec: {
        open: iosTransitionSpec,
        close: iosTransitionSpec,
      },
    },
  },
  {
    name: "StackNavigator1",
  }
);

const StackNavigator2 = createSharedElementStackNavigator(
  {
    Main: {
      screen: (props: any) => <MainScreen {...props} modal />,
    },
  },
  undefined,
  {
    name: "StackNavigator2",
  }
);

const StackNavigator3_5 = createSharedElementStackNavigator(
  {
    Detail: DetailScreen,
  },
  undefined,
  {
    name: "StackNavigator3_5",
  }
);

const StackNavigator3 = createSharedElementStackNavigator(
  {
    Main: MainScreen,
    Detail: StackNavigator3_5,
    /*TopTab: {
      screen: createSharedElementStackNavigator({
        Detail: DetailScreen,
      }),
    },*/
  },
  undefined,
  {
    name: "StackNavigator3",
  }
);

const TabNavigator = createBottomTabNavigator({
  Tab1: {
    screen: StackNavigator1,
    navigationOptions: {
      title: "Stack",
      tabBarIcon: (props) => (
        <Icon name="md-arrow-forward" size={20} color={props.tintColor} />
      ),
    },
  },
  Tab2: {
    screen: StackNavigator2,
    navigationOptions: {
      title: "Modal",
      tabBarIcon: (props) => (
        <Icon name="md-arrow-up" size={20} color={props.tintColor} />
      ),
    },
  },
  Tab3: {
    screen: StackNavigator3,
    navigationOptions: {
      title: "Top Tabs",
      tabBarIcon: (props) => (
        <Icon name="md-keypad" size={20} color={props.tintColor} />
      ),
    },
  },
});

const RootModalStackNavigator = createSharedElementStackNavigator(
  {
    Tabs: TabNavigator,
    Modal: ModalScreen,
  },
  {
    mode: "modal",
    headerMode: "none",
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
    },
  },
  {
    name: "ModalStack",
  }
);

export default createAppContainer(RootModalStackNavigator);
