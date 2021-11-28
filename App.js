import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Start from "./screens/start";
import Game from "./screens/game";
import GameOver from "./screens/gameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const gameOver = (numberOfRounds) => {
    setRounds(numberOfRounds);
  };
  return (
    <View style={classes.screen}>
      <Header title="Natiive" />

      {userNumber && rounds <= 0 ? (
        <Game userChoice={userNumber} onGameOver={gameOver} />
      ) : rounds > 0 ? (
        <GameOver />
      ) : (
        <Start setUserNumber={setUserNumber} />
      )}
    </View>
  );
}

const classes = StyleSheet.create({
  screen: { flex: 1 },
});
