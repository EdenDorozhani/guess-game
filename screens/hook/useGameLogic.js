import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useGameLogic = (numberToBeFound, setNavigator) => {
  const [randomNumber, setRandomNumber] = useState([]);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  useEffect(() => {
    const random = generateRandomNumber();
    setRandomNumber([...randomNumber, random]);
  }, [min, max]);

  useEffect(() => {
    const latestNumber = randomNumber[randomNumber.length - 1];
    if (latestNumber == numberToBeFound) {
      setNavigator("endgame");
    }
  }, [randomNumber]);

  const generateRandomNumber = () => {
    const random = parseInt(Math.random() * (max - min) + min);
    return random;
  };

  const onBigger = () => {
    const latestNumber = randomNumber[randomNumber.length - 1];

    if (numberToBeFound < latestNumber) {
      return Alert.alert(
        "Don't lie!",
        `The number to be found is smaller than ${latestNumber}.`
      );
    }
    setMin(latestNumber);
  };

  const onSmaller = () => {
    const latestNumber = randomNumber[randomNumber.length - 1];

    if (numberToBeFound > latestNumber) {
      return Alert.alert(
        "Don't lie!",
        `The number to be found is bigger than ${latestNumber}.`
      );
    }
    setMax(latestNumber);
  };

  return {
    onSmaller,
    onBigger,
    randomNumber,
  };
};

export default useGameLogic;
