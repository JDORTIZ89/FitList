import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, size, onPress, text }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={styles.text}>logout</Text>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginRight: 5,
    color: "white",
  },
});
