import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import Button from "../components/UI/Button";

function MainMenu({ navigation }) {
  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        style={styles.image}
        resizeMode="strech"
        source={require("./../components/UI/images/template.png")}
      >
        <View style={styles.btnContainer}>
          <Button onPress={() => navigation.navigate("generate")}>
            Create New
          </Button>
          <Button onPress={() => navigation.navigate("playlist")}>
            Get Fit Quick
          </Button>
          <Button onPress={() => navigation.navigate("history")}>
            View History
          </Button>
          </View>
          <View style={styles.returnBtn}>
          <Button onPress={() => navigation.goBack()}>Go Back</Button>
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
  btnContainer:{
    flex: 1,
    marginBottom: 60,
    marginTop: 100,
    padding: 20,
    justifyContent: 'space-evenly',
  },
  returnBtn:{
    padding: 80
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
  buttonStart: {
    position: "absolute",
    top: 150,
    textAlign: "left",
  },
  image: {
    flex: 1,
  },
});
