import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={classes.creen}>
      <Header title="Natiive" />
    </View>
  );
}

const classes = StyleSheet.create({
  screen: { flex: 1 },
});
