import { Text, TextInput, View, StyleSheet } from "react-native";

function Input({ label, style, textInputConfig, invalid }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: 'yellow',
    marginBottom: 4,
  },
  input: {
    backgroundColor: 'black',
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: 'yellow',
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: 'red',
  },
  invalidInput: {
    backgroundColor: 'red',
  },
});