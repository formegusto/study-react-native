import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import ViewStyles from "../styles/ViewStyles";

type Props = {
  navigation: any;
};

function CountScreen(props: Props) {
  const [count, setCount] = useState<number>(0);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button title="+" onPress={() => setCount((c) => c + 1)} color="#FFF" />
      ),
    });
  }, [props.navigation]);

  return (
    <View style={ViewStyles.FullSreen}>
      <Text>{count}</Text>
    </View>
  );
}

export default CountScreen;
