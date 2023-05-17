import { useContext, useState } from "react";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { View, Text, StyleSheet, Alert, ImageBackground } from "react-native";
import { login } from "../util/auth";
import AuthContent from "../components/Auth/AuthContent";
import { Colors } from "react-native/Libraries/NewAppScreen";

function Login() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (e) {
      Alert.alert(
        "Authentication failed",
        "Could not log you in, please check your credentials"
      );
      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./../components/UI/images/loginbackground.png")}
      >
      <AuthContent isLogin={true} onAuthenticate={loginHandler} />
      </ImageBackground>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    flex:1,
  }
});
