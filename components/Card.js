import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/styles";
import {
  useFonts,
  BlackOpsOne_400Regular,
} from "@expo-google-fonts/black-ops-one";

function Card({ children }) {
  let [fontsLoaded] = useFonts({
    BlackOpsOne_400Regular,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 2,
    borderColor: "white",
    backgroundColor: Colors.primary500,
    margin: 40,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontFamily: "BlackOpsOne_400Regular",
    textAlign: "center",
  },
});
