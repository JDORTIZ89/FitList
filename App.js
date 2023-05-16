import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";

import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

import OpeningScreen from "./screens/OpeningScreen";
import MainMenu from "./screens/MainMenu";
import GenerateWorkoutScreen from "./screens/GenerateWorkoutScreen";
import CurrentWorkoutScreen from "./screens/CurrentWorkoutScreen";
import PlaylistScreen from "./screens/PlaylistScreen";
import WorkoutSummaryScreen from "./screens/WorkoutSummaryScreen";
import WorkoutHistoryScreen from "./screens/WorkoutHistoryScreen";
import WorkoutDetails from "./screens/WorkoutDetails";

import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/styles";
import AuthContextProvider, { AuthContext } from "./store/auth-context";

import { View, Text } from "react";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "Colors.primary500" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="opening" component={OpeningScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "Colors.primary100" },
      }}
    >
      <Stack.Screen
        name="LET'S GET FIT"
        component={MainMenu}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={() => {
                authCtx.logout();
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="generate" component={GenerateWorkoutScreen} />
      <Stack.Screen name="playlist" component={PlaylistScreen} />
      <Stack.Screen name="current" component={CurrentWorkoutScreen} />
      <Stack.Screen name="summary" component={WorkoutSummaryScreen} />
      <Stack.Screen name="history" component={WorkoutHistoryScreen} />
      <Stack.Screen name="details" component={WorkoutDetails} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenicated && <AuthStack />}
      {authCtx.isAuthenicated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
