import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CardDetail from "./atoms/CardDetail";
import MainComponent from "./components/MainComponent";
import PortfolioComponent from "./components/PortfolioComponent";
import ShareComponent from "./components/ShareComponent";
import AdComponent from "./components/AdComponent";
import MyPageComponent from "./components/MyPageComponent";

// const stackNavigator = createSharedElementStackNavigator(
//   {
//     List: MainComponent,
//     Detail: CardDetail,
//   },
//   {
//     initialRouteName: "List",
//   }
// );
// const App = createAppContainer(stackNavigator);

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="portfolio" component={PortfolioComponent} />
        <Tab.Screen name="share" component={ShareComponent} />
        <Tab.Screen name="home" component={MainComponent} />
        <Tab.Screen name="ad" component={AdComponent} />
        <Tab.Screen name="my" component={MyPageComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
