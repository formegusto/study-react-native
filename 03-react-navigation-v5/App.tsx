import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Alert, Button, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import HeaderScreen from "./screens/HeaderScreen";
import CountScreen from "./screens/CountScreen";

const Stack = createStackNavigator();

function CustomHeaderTitle() {
  return <View style={{ height: 50, width: 50, backgroundColor: "#FFF" }} />;
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2d2d2d",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "홈",
            headerTitle: (title) => <CustomHeaderTitle />,
          }}
        />
        <Stack.Screen name="Detail" options={{ title: "상세" }}>
          {(props) => <DetailScreen {...props} kind={"스택"} />}
        </Stack.Screen>
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{ title: "게시물 등록하기" }}
        />
        <Stack.Screen
          name="Header"
          component={HeaderScreen}
          options={{
            title: "기본 타이틀",
            headerRight: () => (
              <Button
                title="Info"
                onPress={() => Alert.alert("Hello!")}
                color="#FFF"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Count"
          component={CountScreen}
          options={{
            title: "카운트 예제",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
