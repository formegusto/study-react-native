import React from "react";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
};

function BackIcon({ onPress }: Props) {
  return (
    <AntDesign
      name="arrowleft"
      size={24}
      style={{ padding: 12 }}
      color="#333"
      onPress={onPress}
    />
  );
}

export default BackIcon;
