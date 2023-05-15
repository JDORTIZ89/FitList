import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
// import PlaylistBtn from "../components/UI/PlayListBtn";
import { CATEGORIES } from "../data/exercise-data";
import { EXERCISES } from "../data/exercise-data";
import Button from "../components/UI/Button";
import { useState, useEffect } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { PrivateValueStore } from "@react-navigation/native";
// import { BlackOpsOne_400Regular } from "@expo-google-fonts/black-ops-one";

function GenerateWorkoutScreen({ navigation, importedFont }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedActivity, setSelectedActivity] = useState([]);

  // function renderPlaylistTitle(itemData) {
  //   function pressHandler() {
  //     console.log(itemData);
  //   }
  //   return <PlaylistBtn onPress={pressHandler} title={itemData.item.title} />;
  // }

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  let flatListHelper = [];

  useEffect(() => {
    // flatListHelper = EXERCISES.filter(
    //   (workout) => workout.muscleGroup === selectedCategory.toLowerCase()
    // );
    flatListHelper = selectedActivity;
    console.log(flatListHelper);
  }, [selectedActivity]);

  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        style={styles.image}
        resizeMode="strech"
        source={require("./../components/UI/images/template.png")}
      >
        <View style={styles.listContainer}>
          <SelectList
            data={CATEGORIES}
            boxStyles={{ backgroundColor: "yellow" }}
            inputStyles={{ fontSize: 20, textAlign: "left" }}
            dropdownStyles={{ backgroundColor: "yellow" }}
            fontFamily="BlackOpsOne_400Regular"
            save="value"
            setSelected={(val) => setSelectedCategory(val)}
            onSelect={() =>
              setSelectedActivity(
                EXERCISES.filter(
                  (workout) =>
                    workout.muscleGroup === selectedCategory.toLowerCase()
                ).map((item) => {
                  return item.title;
                })
              )
            }
          />
        </View>
        <View style={styles.filteredList}>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={selectedActivity}
              extraData={flatListHelper}
              renderItem={({ item }) => <Item title={item} />}
              keyExtractor={(item) => item}
              numColumns={1}
            />
          </SafeAreaView>
        </View>
        <View style={styles.buttonStart}>
          <Button onPress={() => navigation.goBack()}>Go Back</Button>
        </View>
      </ImageBackground>
    </View>
  );
}

export default GenerateWorkoutScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {},
  dropdownText: {},
  listContainer: {
    margin: 40,
    padding: 40,
    color: "yellow",
  },
  title: {
    fontSize: "auto",
    color: "black",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flexWrap: "wrap",
    margin: 10,
    backgroundColor: "rgba(0,0,0,0)",
    color: "black",
  },
  buttonStart: {
    position: "absolute",
    top: 500,
    textAlign: "left",
  },
  image: {
    flex: 1,
  },
  filteredList: {
    backgroundColor: "yellow",
    padding: 40,
    margin: 40,
  },
  item: {
    color: "black",
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 32,
  },
});
