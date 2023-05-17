import { BlackOpsOne_400Regular } from "@expo-google-fonts/black-ops-one";
import { View, Text, Image, StyleSheet } from "react-native";

function WorkoutModal({ title, difficulty, muscleGroup, notes, image }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>Difficulty: {difficulty}</Text>
        <Text style={styles.text}>Muscle Group: {muscleGroup}</Text>
        <Text style={styles.notes}>Notes: {notes}</Text>
      </View>
    </View>
  );
}

export default WorkoutModal;

const styles = StyleSheet.create({
  container: {
    width: 300,
  },
  text: {
    fontFamily: "BlackOpsOne_400Regular",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: "BlackOpsOne_400Regular",
    marginVertical: 5,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  notes: {
    fontSize: 12,
    fontFamily: "BlackOpsOne_400Regular",
    marginVertical: 5,
  },
  textContainer: {},
});
