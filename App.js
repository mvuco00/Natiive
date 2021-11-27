import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Start from "./screens/start";

export default function App() {
  return (
    <View style={classes.screen}>
      <Header title="Natiive" />
      <Start />
    </View>
  );
}

const classes = StyleSheet.create({
  screen: { flex: 1 },
});
