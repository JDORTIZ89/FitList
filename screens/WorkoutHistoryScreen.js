import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import Button from "../components/UI/Button";
import { EXERCISES } from "../data/exercise-data";

function WorkoutHistoryScreen({ navigation }) {
  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={require("./../components/UI/images/template.png")}
      >
        <Text style={styles.text}>Workout History Screen</Text>

        <View>
          <Image
            source={{ 
              uri: "https://www.spotebi.com/wp-content/uploads/2016/03/decline-push-up-exercise-illustration-spotebi.gif"}}
              style={{width: 200, height: 200,}}
          />
        </View>

        <Button onPress={() => navigation.goBack()}>Go Back</Button>
      </ImageBackground>
    </View>
  );
}

export default WorkoutHistoryScreen;

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
