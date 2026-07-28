import {
  Keyboard,
  StyleSheet,
  Text,
  Touchable,
  TouchableWithoutFeedback,
} from "react-native";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import { useState } from "react";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useUser } from "../../hooks/useUser";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useUser();
  const handleSubmit = async () => {
    console.log(email, password);
    try {
      await register(email, password);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText style={styles.title} title={true}>
          Create Your account
        </ThemedText>

        <ThemedTextInput
          placeholder="Email"
          style={{ width: "80%", marginBottom: 20 }}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <ThemedTextInput
          placeholder="Password"
          style={{ width: "80%", marginBottom: 20 }}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Register</Text>
        </ThemedButton>
        <Spacer height={100} />
        <Link href="/login">
          <ThemedText style={{ textAlign: "center" }}>Login</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
