import { useContext, useState } from "react";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { Alert, StyleSheet, View, Text, ImageBackground } from "react-native";
import { AuthContext } from "../store/auth-context";
import AuthContent from "../components/Auth/AuthContent";

function SignUpScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (e) {
      Alert.alert(
        "Authenication failed",
        "Could not sign you up. Please try again later"
      );
      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./../components/UI/images/loginbackground.png")}
      >
        <AuthContent onAuthenticate={signupHandler} />
      </ImageBackground>
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
