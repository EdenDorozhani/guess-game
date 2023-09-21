import { View, StyleSheet } from "react-native";
import PrimaryButton from "../PrimaryButton";

const ButtonContainer = ({ leftText, rightText, leftAction, rightAction }) => {
  return (
    <View style={styles.buttonContainer}>
      <PrimaryButton text={leftText} action={leftAction} />
      <PrimaryButton text={rightText} action={rightAction} />
    </View>
  );
};

export default ButtonContainer;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
