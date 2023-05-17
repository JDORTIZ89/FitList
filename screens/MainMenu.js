import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
} from "react-native";
import { EXERCISES } from "../data/exercise-data";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  BlackOpsOne_400Regular,
} from "@expo-google-fonts/black-ops-one";
import Button from "../components/UI/Button";
import Card from "../components/Card";

function MainMenu({ navigation }) {
  let [fontsLoaded] = useFonts({
    BlackOpsOne_400Regular,
  });

  return (
    <View style={styles.outerContainer}>
      <StatusBar style="light"></StatusBar>
      <ImageBackground
        style={styles.image}
        resizeMode="strech"
        source={require("./../components/UI/images/wallpaper5.png")}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>FIT LIST</Text>
        </View>
        <View>
          <Card>Welcome, James!</Card>
        </View>
        <View style={styles.buttonStart}>
          <Button onPress={() => navigation.navigate("generate")}>
            CREATE
          </Button>
          <Button onPress={() => navigation.navigate("playlist")}>
            PLAYLISTS
          </Button>
          <Button onPress={() => navigation.navigate("history")}>
            HISTORY
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}

export default MainMenu;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  outerContainer: {
    flex: 1,
  },
  titleContainer: {
    marginTop: 50,
    marginLeft: 80,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "black",
    fontFamily: "BlackOpsOne_400Regular",
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
  buttonStart: {
    flex: 1,
    margin: 40,
  },
  image: {
    flex: 1,
  },
});
