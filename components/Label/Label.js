import { Dimensions, StyleSheet, Text, View } from "react-native";

const Label = ({ title, costume }) => {
  return (
    <View style={costume ? styles.costumLabelContainer : styles.labelContainer}>
      <Text style={costume ? styles.costumLabelText : styles.labelText}>
        {title}
      </Text>
    </View>
  );
};

export default Label;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  labelContainer: {
    borderWidth: 3,
    borderColor: "#7b68ee",
    padding: 7,
    borderRadius: 5,
    maxWidth: "70%",
  },
  costumLabelContainer: {
    width: "80%",
    maxWidth: "80%",
    height: 100,
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#da70d6",
    justifyContent: "center",
    borderRadius: 5,
  },
  labelText: {
    fontSize: 26,
    fontWeight: "900",
    color: "#7b68ee",
  },
  costumLabelText: {
    fontSize: 33,
    fontWeight: "900",
    color: "#da70d6",
  },
});
