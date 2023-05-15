import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import BackArrows from "../components/UI/BackArrows";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Button from "../components/UI/Button";
import { BlackOpsOne_400Regular } from "@expo-google-fonts/black-ops-one";

function CreateAccount({ navigation }) {
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState("");

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
        </View>

        <SafeAreaView>
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="useless placeholder"
          />
        </SafeAreaView>

        <View style={styles.btnContainer}>
          <Button onPress={() => navigation.navigate("mainmenu")}>
            CREATE
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}

export default CreateAccount;

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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    color: 'yellow',
    fontSize: 30,
    fontFamily: 'BlackOpsOne_400Regular',
    padding: 10,
  },
});
