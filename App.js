import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Start from "./screens/start";
import Game from "./screens/game";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  console.log(userNumber);
  return (
    <View style={classes.screen}>
      <Header title="Natiive" />

      {userNumber ? (
        <Game userChoice={userNumber} />
      ) : (
        <Start setUserNumber={setUserNumber} />
      )}
    </View>
  );
}

const classes = StyleSheet.create({
  screen: { flex: 1 },
});
