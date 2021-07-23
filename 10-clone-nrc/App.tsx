import React from "react";
import { createAppContainer } from "react-navigation";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import CardDetail from "./atoms/CardDetail";
import MainComponent from "./components/MainComponent";

const stackNavigator = createSharedElementStackNavigator(
  {
    List: MainComponent,
    Detail: CardDetail,
  },
  {
    initialRouteName: "List",
  }
);
const App = createAppContainer(stackNavigator);

export default App;
