import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OpeningScreen from "./screens/OpeningScreen";
import MainMenu from "./screens/MainMenu";
import GenerateWorkoutScreen from "./screens/GenerateWorkoutScreen";
import CurrentWorkoutScreen from "./screens/CurrentWorkoutScreen";
import PlaylistScreen from "./screens/PlaylistScreen";
import WorkoutSummaryScreen from "./screens/WorkoutSummaryScreen";
import WorkoutHistoryScreen from "./screens/WorkoutHistoryScreen";
import WorkoutDetails from "./screens/WorkoutDetails";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  BlackOpsOne_400Regular,
} from "@expo-google-fonts/black-ops-one";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded, error] = useFonts({
    BlackOpsOne_400Regular,
    // BlackOps: require("./assets/fonts/BlackOps.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="opening" component={OpeningScreen} />
        <Stack.Screen name="mainmenu" component={MainMenu} />
        <Stack.Screen name="generate" component={GenerateWorkoutScreen} />
        <Stack.Screen name="playlist" component={PlaylistScreen} />
        <Stack.Screen name="current" component={CurrentWorkoutScreen} />
        <Stack.Screen name="summary" component={WorkoutSummaryScreen} />
        <Stack.Screen name="history" component={WorkoutHistoryScreen} />
        <Stack.Screen name="details" component={WorkoutDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
