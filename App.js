import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [numberToBeFound, setNumberToBeFound] = useState("");
  const [screens, setScreens] = useState({
    startScreen: true,
    gameScreen: false,
    gameoverScreen: false,
  });
  const [array, setArray] = useState();

  const getTheNumberToBeFound = (number) => {
    setNumberToBeFound(number);
  };

  const resetNumberToBeFound = () => {
    setNumberToBeFound("");
  };

  const setNavigator = (screen) => {
    switch (screen) {
      case "home":
        setScreens({
          startScreen: true,
          gameScreen: false,
          gameoverScreen: false,
        });
        break;
      case "game":
        setScreens({
          startScreen: false,
          gameScreen: true,
          gameoverScreen: false,
        });
        break;
      case "endgame":
        setScreens({
          startScreen: false,
          gameScreen: false,
          gameoverScreen: true,
        });
        break;
    }
  };

  const getArray = (array) => {
    setArray(array);
  };

  return (
    <LinearGradient style={styles.rootScreen} colors={["#800080", "#000080"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screens.startScreen && (
          <StartGameScreen
            setNavigator={setNavigator}
            numberToBeFound={numberToBeFound}
            resetNumberToBeFound={resetNumberToBeFound}
            getTheNumberToBeFound={getTheNumberToBeFound}
          />
        )}
        {screens.gameScreen && (
          <GameScreen
            getArray={getArray}
            numberToBeFound={numberToBeFound}
            setNavigator={setNavigator}
          />
        )}
        {screens.gameoverScreen && (
          <GameOverScreen
            numberToBeFound={numberToBeFound}
            array={array}
            setNavigator={setNavigator}
          />
        )}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
