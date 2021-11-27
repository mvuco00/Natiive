import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import COLORS from "../constants/colors";
import Card from "../components/Card";
import Input from "../components/Input";

const Start = () => {
  return (
    <View style={classes.screen}>
      <Text style={classes.title}>Start a New Game!</Text>
      <Card style={classes.inputContainer}>
        <Text>Select a Number</Text>
        <Input styles={classes.input} />
        <View style={classes.buttonContainer}>
          <View style={classes.button}>
            <Button title="Reset" color={COLORS.secondary} onPress={() => {}} />
          </View>
          <View style={classes.button}>
            <Button title="Confirm" color={COLORS.primary} onPress={() => {}} />
          </View>
        </View>
      </Card>
    </View>
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
