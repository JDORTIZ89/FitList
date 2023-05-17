import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../constants/styles";
import {
  useFonts,
  BlackOpsOne_400Regular,
} from "@expo-google-fonts/black-ops-one";

function Button({ children, onPress }) {
  let [fontsLoaded] = useFonts({
    BlackOpsOne_400Regular,
  });
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "black",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 4,
    borderColor: "white",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.primary500,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "BlackOpsOne_400Regular",
  },
});
