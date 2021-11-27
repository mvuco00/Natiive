import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import COLORS from "../constants/colors";
import Card from "../components/Card";
import Input from "../components/Input";

const Start = ({ setUserNumber }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const handleConfirm = () => {
    if (isNaN(+enteredValue) || +enteredValue <= 0 || +enteredValue > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: handleReset }]
      );
      return;
    }
    setConfirm(true);
    setSelectedNumber(+enteredValue);
    setEnteredValue("");
  };

  const handleReset = () => {
    setEnteredValue("");
    setConfirm(false);
    setSelectedNumber();
  };

  const handleStart = () => {
    setUserNumber(selectedNumber);
  };

  let confirmedOutput;

  if (confirm) {
    confirmedOutput = (
      <Card style={classes.confirmedOutput}>
        <Text>Chosen number</Text>
        <Text style={classes.number}>{selectedNumber}</Text>
        <View style={classes.startButton}>
          <Button title="Start game" onPress={handleStart} />
        </View>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={classes.screen}>
        <Text style={classes.title}>Start a New Game!</Text>
        <Card style={classes.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            styles={classes.input}
            blurOnSubmit
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={classes.buttonContainer}>
            <View style={classes.button}>
              <Button
                title="Reset"
                color={COLORS.secondary}
                onPress={() => handleReset}
              />
            </View>
            <View style={classes.button}>
              <Button
                title="Confirm"
                color={COLORS.primary}
                onPress={handleConfirm}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const classes = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: "100%",
    textAlign: "center",
  },
  confirmedOutput: {
    marginTop: 50,
    alignItems: "center",
  },
  number: {
    fontSize: 20,
    color: "blue",
  },
  startButton: {
    marginTop: 10,
  },
});

export default Start;
