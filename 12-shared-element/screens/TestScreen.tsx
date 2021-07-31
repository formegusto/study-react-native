import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { SharedElementNode } from "react-native-shared-element";
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from "react-native-shared-element";

// Scene 1
let startAncestor: SharedElementNode | null;
let startNode: SharedElementNode | null;
<View ref={(ref) => (startAncestor = nodeFromRef(ref))}>
  <SharedElement onNode={(node) => (startNode = node)}>
    <Text>scene_1</Text>
  </SharedElement>
</View>;

// Scene2
let endAncestor: SharedElementNode | null;
let endNode: SharedElementNode | null;
<View ref={(ref) => (endAncestor = nodeFromRef(ref))}>
  <SharedElement onNode={(node) => (endNode = node)}>
    <Text>scene_2</Text>
  </SharedElement>
</View>;

// Render overlay in front of screen
const position = new Animated.Value(0);
<View style={StyleSheet.absoluteFill}>
  <SharedElementTransition
    start={{
      node: startNode,
      ancestor: startAncestor,
    }}
    end={{
      node: endNode,
      ancestor: endAncestor,
    }}
    position={position}
    animation="move"
    resize="auto"
    align="auto"
  />
</View>;
