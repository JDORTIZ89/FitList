import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function PlaylistBtn({ onPress, title }) {
  return (
    <View style={styles.btnContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <Text style={styles.btnText}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default PlaylistBtn;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    margin: 4,
  },
  buttonPressed: {
    opacity: 0.5,
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
    margin: 4,
    width: 300,
  },
});
