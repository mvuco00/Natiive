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

const Start = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const handleConfirm = () => {
    if (isNaN(selectedNumber) || selectedNumber <= 0 || selectedNumber > 99) {
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

  let confirmedOutput;

  if (confirm) {
    confirmedOutput = <Text>Chosen number {selectedNumber}</Text>;
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
});

export default Start;
