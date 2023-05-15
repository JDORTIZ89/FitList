import { View, Text, TextInput, StyleSheet } from "react-native";

function CreateAccountForm({ label, style, inputConfig, invalid }) {
const inputStyles = [styles.input];


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <TextInput style={styles.text}></TextInput>
    </View>
  );
}

export default CreateAccountForm;

const styles = StyleSheet.create({
  container: {},
  title: {},
  text: {},
});
