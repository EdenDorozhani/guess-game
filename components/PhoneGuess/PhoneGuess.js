import { StyleSheet, Text, View } from "react-native";

const PhoneGuess = ({ guess, numberOfGuesses }) => {
  return (
    <View style={styles.guessContainer}>
      <Text style={styles.guessText}>{numberOfGuesses}</Text>
      <Text style={styles.guessText}>{guess}</Text>
    </View>
  );
};

export default PhoneGuess;

const styles = StyleSheet.create({
  guessContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#4A3691",
  },

  guessText: {
    color: "#da70d6",
  },
});
