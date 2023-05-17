import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Modal,
  Pressable,
  Image,
} from "react-native";
// import PlaylistBtn from "../components/UI/PlayListBtn";
import { CATEGORIES } from "../data/exercise-data";
import { EXERCISES } from "../data/exercise-data";
import Button from "../components/UI/Button";
import { useState, useEffect } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { PrivateValueStore } from "@react-navigation/native";
import { BlackOpsOne_400Regular } from "@expo-google-fonts/black-ops-one";
import { Colors } from "../constants/styles";
import WorkoutModal from "../components/UI/WorkoutModal";

function GenerateWorkoutScreen({ navigation, importedFont }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState({
    title: "",
    notes: "",
    image: "",
    muscleGroup: "",
    difficulty: "",
    matlrequired: "",
    id: "",
  });
  const [modalVisible, setModalVisible] = useState(false);

  function WorkoutDetailsHandler(title) {
    setModalVisible(!modalVisible);
    setSelectedWorkout(EXERCISES.filter((workout) => workout.title === title));
    console.log(selectedWorkout);
    console.log(selectedWorkout[0].notes);
  }

  function SelectedCategoryHandler() {
    setSelectedActivities(
      EXERCISES.filter(
        (workout) => workout.muscleGroup === selectedCategory.toLowerCase()
      ).map((item) => {
        return item.title;
      })
    );
  }

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Button onPress={() => WorkoutDetailsHandler(title)}>{title}</Button>
    </View>
  );

  let flatListHelper = [];

  useEffect(() => {
    flatListHelper = selectedActivities;
    console.log(flatListHelper);
    setSelectedWorkout(
      EXERCISES.filter((workout) => workout.title === selectedActivities)
    );
    console.log(selectedWorkout);
  }, [selectedActivities]);

  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        style={styles.image}
        resizeMode="strech"
        source={require("./../components/UI/images/template.png")}
      >
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.detailsContainer}>
                  {modalVisible && (
                    <WorkoutModal
                      title={selectedWorkout[0].title}
                      image={selectedWorkout[0].image}
                      difficulty={selectedWorkout[0].difficulty}
                      notes={selectedWorkout[0].notes}
                      muscleGroup={selectedWorkout[0].muscleGroup}
                    ></WorkoutModal>
                  )}
                </View>
                <View style={styles.modalButtonContainer}>
                  <Button onPress={() => setModalVisible(!modalVisible)}>
                    Back
                  </Button>
                  <Button onPress={() => {}}>Add</Button>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.listContainer}>
          <SelectList
            data={CATEGORIES}
            boxStyles={{ backgroundColor: "yellow" }}
            inputStyles={{ fontSize: 20, textAlign: "left" }}
            dropdownStyles={{ backgroundColor: "yellow" }}
            fontFamily="BlackOpsOne_400Regular"
            save="value"
            setSelected={(val) => setSelectedCategory(val)}
            onSelect={() => {
              SelectedCategoryHandler();
            }}
          />
        </View>
        <View style={styles.filteredList}>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={selectedActivities}
              extraData={flatListHelper}
              renderItem={({ item }) => <Item title={item} />}
              keyExtractor={(item) => item}
              numColumns={1}
            />
          </SafeAreaView>
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
    margin: 20,
  },
  item: {
    color: "black",
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 32,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  modalView: {
    margin: 60,
    backgroundColor: Colors.primary500,
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginHorizontal: 20,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width: 40,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalButtonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  detailsContainer: {
    alignItems: "center",
  },
});
