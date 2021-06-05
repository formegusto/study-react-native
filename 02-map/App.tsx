import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Location from "expo-location";

type Coord = {
  latitude: number;
  longitude: number;
};

export default function App() {
  const [coords, setCoords] = useState<Coord | null>(null);
  useEffect(() => {
    const requestAuth = async () => {
      await Location.requestForegroundPermissionsAsync();
    };

    requestAuth();
  }, []);

  const readLoc = useCallback(async () => {
    const loc = await Location.getCurrentPositionAsync();
    setCoords(loc.coords);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{coords === null ? "정보가 없습니다" : `${coords.latitude}`}</Text>
      <TouchableOpacity onPress={readLoc}>
        <Text>test</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
