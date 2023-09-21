import { Text, TextInput, View, StyleSheet } from "react-native";
import ButtonContainer from "../ButtonContainer";

const Operator = ({
  info,
  leftButtonText,
  rightButtonText,
  leftButtonAction,
  rightButtonAction,
  onChangeHandler,
  title,
  numberToBeFound,
}) => {
  return (
    <View style={styles.operatorContainer}>
      <Text style={styles.operatorTitle}>{title}</Text>
      {!info && (
        <TextInput
          style={styles.operatorInput}
          selectionColor="#0098DC"
          underlineColorAndroid="transparent"
          onChangeText={(enteredValue) => onChangeHandler(enteredValue)}
          keyboardType="numeric"
          maxLength={2}
          value={numberToBeFound}
        />
      )}

      <ButtonContainer
        leftText={leftButtonText}
        leftAction={leftButtonAction}
        rightText={rightButtonText}
        rightAction={rightButtonAction}
      />
    </View>
  );
};

export default Operator;

const styles = StyleSheet.create({
  operatorContainer: {
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
    gap: 15,
    backgroundColor: "#4A3691",
    paddingVertical: 13,
  },
  operatorInput: {
    paddingVertical: 0,
    width: 50,
    borderBottomWidth: 2,
    borderColor: "#0098DC",
    color: "#0098DC",
    textAlign: "center",
    fontSize: 30,
  },
  operatorTitle: {
    color: "#0098DC",
    fontSize: 20,
    marginBottom: 10,
  },
});
