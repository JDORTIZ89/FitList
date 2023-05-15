import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import Button from "../components/UI/Button";
import BackArrows from "../components/UI/BackArrows";
import { Ionicons } from "@expo/vector-icons";

function MainMenu({ navigation }) {
  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        style={styles.image}
        resizeMode="strech"
        source={require("./../components/UI/images/template.png")}
      >
        <View style={styles.returnBtn}>
          <BackArrows onPress={() => navigation.goBack()}>
            <View style={styles.backArrows}>
              <Ionicons name="chevron-back-outline" style={styles.backIcons} />
              <Ionicons name="chevron-back-outline" style={styles.backIcons} />
              <Ionicons name="chevron-back-outline" style={styles.backIcons} />
            </View>
          </BackArrows>
          <View>
            <Text style={styles.title}>FIT LIST</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Welcome... James!</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button onPress={() => navigation.navigate("generate")}>
            NEW
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
  image: {
    flex: 1,
  },
  btnContainer: {
    padding: 50,
  },
  title: {
    fontSize: 55,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
    marginLeft: 60,
    fontFamily: "BlackOpsOne_400Regular",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    flexWrap: "wrap",
    margin: 10,
    backgroundColor: "rgba(0,0,0,0)",
    color: "white",
    fontFamily: "BlackOpsOne_400Regular",
  },
  textContainer: {
    marginTop: 40,
  },
  backArrows: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 20,
  },
  backIcons: {
    fontSize: 80,
    color: "yellow",
    width: 50,
  },
  returnBtn: {
    padding: 20,
    alignSelf: "flex-start",
    flexDirection: "row",
  },
});
