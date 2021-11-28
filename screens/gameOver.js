import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

const GameOver = ({ rounds, userNumber, startOver }) => {
  return (
    <View style={classes.screen}>
      <Text style={classes.title}>Game over</Text>
      <Text style={classes.text}>Rounds: {rounds}</Text>
      <Text style={classes.text}>User number was: {userNumber}</Text>
      <View style={classes.button}>
        <Button title="Start over" onPress={startOver} />
      </View>
    </View>
  );
};

export default GameOver;

const classes = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 21,
    color: "red",
  },
  text: {
    fontSize: 18,
  },
  button: {
    marginTop: 20,
  },
});
