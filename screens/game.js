import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
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

const Game = ({ userChoice, onGameOver }) => {
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [rounds, setRounds] = useState(0);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userChoice)
  );

  const handleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "This is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction == "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((currentRounds) => currentRounds + 1);
  };

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [onGameOver, rounds, currentGuess, userChoice]);
  return (
    <View style={classes.wrapper}>
      <Card style={classes.content}>
        <Text>Computer's guess</Text>
        <Text style={classes.number}>{currentGuess}</Text>
        <View style={classes.buttons}>
          <Button title="Lower" onPress={() => handleNextGuess("lower")} />
          <Button title="Greater" onPress={() => handleNextGuess("greater")} />
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
