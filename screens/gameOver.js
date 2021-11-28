import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

const GameOver = () => {
  return (
    <View style={classes.screen}>
      <Text>Game over</Text>
    </View>
  );
};

export default GameOver;

const classes = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
