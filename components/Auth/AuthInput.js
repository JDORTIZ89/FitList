import { View, Text, TextInput, StyleSheet } from "react-native";

import { Colors } from "../../constants/styles";
import { BlackOpsOne_400Regular } from "@expo-google-fonts/black-ops-one";

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize={false}
        // autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: "white",
    marginBottom: 4,
    fontWeight: "bold",
    fontFamily: "BlackOpsOne_400Regular",
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: "black",
    color: "yellow",
    borderRadius: 4,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "BlackOpsOne_400Regular",
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
