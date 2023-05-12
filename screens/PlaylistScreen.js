import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import PlaylistBtn from "../components/UI/PlayListBtn";
import { PLAYLISTS } from "../data/exercise-data";
import Button from "../components/UI/Button";

function PlaylistScreen({ navigation }) {
  function renderPlaylistTitle(itemData) {
    function pressHandler() {
      console.log(itemData.item.title);
    }

    return <PlaylistBtn onPress={pressHandler} title={itemData.item.title} />;
  }

  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        style={styles.image}
        resizeMode="strech"
        source={require("./../components/UI/images/template.png")}
      >
        <View style={styles.buttonStart}>
          <Button onPress={() => navigation.goBack()}>Go Back</Button>
          <FlatList
            data={PLAYLISTS}
            keyExtractor={(item) => item.id}
            renderItem={renderPlaylistTitle}
            numColumns={1}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default PlaylistScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
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
