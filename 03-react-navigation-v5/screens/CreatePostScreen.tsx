import React from "react";
import { Button, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ViewStyles from "../styles/ViewStyles";

type Props = {
  navigation: any;
};

function CreatePostScreen(props: Props) {
  const [postText, setPostText] = React.useState<string>("");
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          props.navigation.navigate({
            name: "Home",
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}

export default CreatePostScreen;
