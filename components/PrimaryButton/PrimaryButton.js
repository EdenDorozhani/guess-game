import { Text, StyleSheet, TouchableOpacity } from "react-native";

const PrimaryButton = ({ text, action }) => {
  return (
    <TouchableOpacity
      style={styles.primaryButtonContainer}
      onPress={() => action && action()}
    >
      <Text style={styles.buttonContent}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  primaryButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#7b68ee",
  },
  buttonContent: {
    color: "white",
  },
});
