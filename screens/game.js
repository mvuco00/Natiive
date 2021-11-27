import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  if (randomNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNum;
  }
};

const Game = ({ userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userChoice)
  );

  return (
    <View style={classes.wrapper}>
      <Card style={classes.content}>
        <Text>Computer's guess</Text>
        <Text style={classes.number}>{currentGuess}</Text>
        <View style={classes.buttons}>
          <Button title="Lower" />
          <Button title="Greater" />
        </View>
      </Card>
    </View>
  );
};

export default Game;

const classes = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
  },
  content: {
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,

    width: 300,
    maxWidth: "80%",
  },
  number: {
    fontSize: 20,
    color: "red",
  },
});
