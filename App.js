import * as React from "react";
import { useContext, useEffect, useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";

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

import { View, Text, Image } from "react";
import Header from "./components/UI/Header";

import {
  useFonts,
  BlackOpsOne_400Regular,
} from "@expo-google-fonts/black-ops-one";

const Stack = createStackNavigator();

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require('./assets/icon.png')}
//     />
//   );
// }

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
        headerTitleStyle: {
          fontFamily: 'BlackOpsOne_400Regular',
          fontSize: 32,
        }
      }}
    >
      <Stack.Screen
        name="Back"
        component={OpeningScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="mainmenu"
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
        headerTintColor: "black",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name="mainmenu"
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
          // header: (props)=> <Header></Header>
          headerTitle: "",
          headerStyle: {
            height: 0,
          },
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
    SplashScreen.preventAutoHideAsync();
    setTimeout(SplashScreen.hideAsync, 2000);
  }

  return <Navigation />;
}

export default function App() {
  let [fontsLoaded] = useFonts({
    BlackOpsOne_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
