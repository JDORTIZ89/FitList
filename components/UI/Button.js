import { Pressable } from "react-native";
import { View, Text, StyleSheet } from "react-native";

function Button({ onPress, children }) {
  return (
    <View style={styles.btnContainer}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    margin: 4,
  },
  btnText: {
    color: "yellow",
    fontSize: 42,
    fontFamily: "BlackOpsOne_400Regular",
    textAlign: "center",
    padding: 2,
    margin: 2,
  },
  btnContainer: {
    margin: 2,
    padding: 4,
    backgroundColor: "black",
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 5,
  },
});
