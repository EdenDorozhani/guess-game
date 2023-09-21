import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Label from "../Label";
import PrimaryButton from "../PrimaryButton";

const EndPoint = ({ numberOfRounds, numberToBeFound, navigate }) => {
  const { width } = useWindowDimensions();

  let content;
  if (width > 400) {
    content = (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={[styles.endPoinContainer, { paddingVertical: 25, gap: 12 }]}
        >
          <Label title={"GAME OVER!"} />
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/images/success.png")}
            />
          </View>
          <Text style={{ color: "#0098DC" }}>
            Your phone needed {numberOfRounds} rounds to guess the number{" "}
            {numberToBeFound}.
          </Text>
        </View>

        <PrimaryButton text={"Start New Game"} action={navigate} />
      </View>
    );
  } else {
    content = (
      <View style={styles.endPoinContainer}>
        <Label title={"GAME OVER!"} />
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/success.png")}
          />
        </View>
        <Text style={{ color: "#0098DC" }}>
          Your phone needed {numberOfRounds} rounds to guess the number{" "}
          {numberToBeFound}.
        </Text>
        <PrimaryButton text={"Start New Game"} action={navigate} />
      </View>
    );
  }

  return content;
};

export default EndPoint;

const styles = StyleSheet.create({
  endPoinContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 55,
    gap: 25,
  },

  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#7b68ee",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
