import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Button from "../components/UI/Button";

function OpeningScreen({ navigation, importedFont }) {
  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={require("./../components/UI/images/mainscreen.png")}
      >
        <View style={styles.btnPosition}>
          <Button
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.text}>Enter!</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}

export default OpeningScreen;

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
    fontSize: 40,
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
  btnPosition: {
    position: "absolute",
    margin: 5,
    bottom: 150,
    shadowColor: 'black',
    borderWidth: 8,
    borderRadius: 10,
  },
});
