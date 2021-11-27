import React from "react";
import { TextInput, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

const Input = ({ styles }) => {
  return <TextInput style={{ ...classes.input, ...styles }} />;
};

export default Input;

const classes = StyleSheet.create({
  input: {
    height: 30,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    marginVertical: 10,
  },
});
