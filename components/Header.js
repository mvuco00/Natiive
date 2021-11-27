import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    height: 70,
    backgroundColor: "#f7287b",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 21,
    padding: 20,
  },
});
