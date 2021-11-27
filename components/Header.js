import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View style={classes.header}>
      <Text style={classes.title}>{title}</Text>
    </View>
  );
};

export default Header;

const classes = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 21,
    marginTop: 10,
    padding: 20,
  },
});
