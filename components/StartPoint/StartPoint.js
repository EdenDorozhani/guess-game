import { FlatList, StyleSheet, View, useWindowDimensions } from "react-native";
import Label from "../Label";
import Operator from "../Operator";
import PhoneGuess from "../PhoneGuess";

const StartPoint = ({
  labelTitle,
  operatorTitle,
  leftButtonText,
  leftButtonAction,
  rightButtonText,
  rightButtonAction,
  onChangeHandler,
  numberToBeFound,
  info,
  randomNumber,
}) => {
  const { height } = useWindowDimensions();

  const paddingVertical = height < 380 ? 27 : 55;

  return (
    <View style={[styles.gameScreen, { paddingVertical: paddingVertical }]}>
      <Label title={labelTitle} />
      {info && (
        <Label
          costume={true}
          title={randomNumber?.[randomNumber?.length - 1]}
        />
      )}
      <Operator
        leftButtonText={leftButtonText}
        leftButtonAction={leftButtonAction}
        rightButtonText={rightButtonText}
        rightButtonAction={rightButtonAction}
        onChangeHandler={onChangeHandler}
        title={operatorTitle}
        numberToBeFound={numberToBeFound}
        info={info}
      />
      <FlatList
        data={randomNumber}
        renderItem={({ item, index }) => (
          <PhoneGuess
            guess={`Opponent's Guess ${item}!`}
            numberOfGuesses={`#${index + 1}`}
          />
        )}
        keyExtractor={() => Math.random()}
        style={styles.flatList}
      />
    </View>
  );
};

export default StartPoint;

const styles = StyleSheet.create({
  gameScreen: {
    alignItems: "center",
    paddingVertical: 55,
    gap: 25,
  },
  flatList: {
    width: "80%",
    height: "50%",
  },
});
