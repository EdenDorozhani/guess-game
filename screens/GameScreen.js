import useGameLogic from "./hook/useGameLogic";
import StartPoint from "../components/StartPoint";
import { useEffect } from "react";

const GameScreen = ({ numberToBeFound, setNavigator, getArray }) => {
  const { randomNumber, onSmaller, onBigger } = useGameLogic(
    numberToBeFound,
    setNavigator
  );

  useEffect(() => {
    getArray(randomNumber);
  }, [randomNumber]);

  const onBiggerNumber = () => {
    onBigger();
  };

  const onSmallerNumber = () => {
    onSmaller();
  };

  return (
    <StartPoint
      randomNumber={randomNumber}
      labelTitle={"Opponent's Guess"}
      operatorTitle={"Higher or lower?"}
      leftButtonText={"-"}
      leftButtonAction={onSmallerNumber}
      rightButtonText={"+"}
      rightButtonAction={onBiggerNumber}
      info={true}
    />
  );
};

export default GameScreen;
