import { useContext, useState } from "react";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { Alert } from "react-native";
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

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignUpScreen;
