import { View, StyleSheet, Text } from "react-native";

function MainMenu() {
  return <View style={styles.outerContainer}></View>;
}

export default MainMenu;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
