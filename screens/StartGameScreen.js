import { Alert } from "react-native";
import StartPoint from "../components/StartPoint";
import { useState } from "react";

const StartGameScreen = ({
  getTheNumberToBeFound,
  resetNumberToBeFound,
  setNavigator,
}) => {
  const [textValue, setTextValue] = useState("");

  const onChangeHandler = (text) => {
    setTextValue(text);
  };

  const onPressConfirm = () => {
    let number = parseInt(textValue);
    if (number <= 0 || number > 100) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: () => resetNumberToBeFound(),
          },
        ]
      );
      return;
    }
    setNavigator("game");
    getTheNumberToBeFound(textValue);
  };

  return (
    <StartPoint
      labelTitle={"Guess My Number"}
      leftButtonText={"Reset"}
      rightButtonText={"Confirm"}
      rightButtonAction={onPressConfirm}
      onChangeHandler={onChangeHandler}
      operatorTitle={"Enter a Number"}
      numberToBeFound={textValue}
    />
  );
};

export default StartGameScreen;
