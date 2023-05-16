import { View, Text, TextInput, StyleSheet } from "react-native";
import Input from "./Input";
import { useState } from "react";
import { BlackOpsOne_400Regular } from "@expo-google-fonts/black-ops-one";

function AccountForm({}) {
  const [userData, setUserData] = useState({
    firstName: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    lastName: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    username: {
      value: defaultValues ? defaultValues.description.toString() : "",
      isValid: true,
    },
    dateOfBirth: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    password: {
      value: defaultValues ? defaultValues.password.toString() : "",
      isValid: true,
    },
    email: {
      value: defaultValues ? defaultValues.email.toString() : "",
      isValid: true,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Name"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            multiline: true,
            onChangeText: inputChangedHandler.bind(this, "name"),
            value: inputs.amount.value,
          }}
        />
      </View>
    </View>
  );
}

export default AccountForm;

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 40 },
  title: { padding: 2, margin: 2, color: "yellow", backgroundColor: "blue" },
  text: { margin: 2 },
  label: { fontSize: 24 },
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    margin: 24,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  errorText: {
    textAlign: "center",
    color: "red",
    margin: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
