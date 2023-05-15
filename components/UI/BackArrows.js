import { Pressable } from "react-native";
import { View, Text, StyleSheet } from "react-native";

function BackArrows({ onPress, children }) {
  return (
    <View style={styles.btnContainer}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default BackArrows;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    margin: 4,
  },
  btnText: {
    color: "yellow",
    textAlign: "center",
    padding: 2,
    margin: 2,
  },
  btnContainer: {
    margin: 2,
    padding: 4,
    backgroundColor: "transparent",
  },
});
