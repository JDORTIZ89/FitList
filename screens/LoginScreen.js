import { useContext, useState } from "react";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { View, Text, StyleSheet, Alert } from "react-native";
import { login } from "../util/auth";
import AuthContent from "../components/Auth/AuthContent";

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
  return <AuthContent isLogin={true} onAuthenticate={loginHandler} />;
}

export default Login;

const styles = StyleSheet.create({
  test: {
    flex: 1,
    color: "black",
    backgroundColor: "blue",
    fontSize: 40,
    padding: 30,
    margin: 10,
  },
});
