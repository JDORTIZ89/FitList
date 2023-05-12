import { View, Text, ImageBackground, StyleSheet } from "react-native";

function WorkoutSummaryScreen() {
  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={require("./../components/UI/images/template.png")}
      ></ImageBackground>
    </View>
  );
}

export default WorkoutSummaryScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  innerContainer: {
    backgroundColor: "black",
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "black",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flexWrap: "wrap",
    margin: 10,
    backgroundColor: "rgba(0,0,0,0)",
    color: "white",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
