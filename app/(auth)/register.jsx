import { StyleSheet, Text } from "react-native";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";

const register = () => {
  const handleSubmit = () => {
    console.log("registered");
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText style={styles.title} title={true}>
        Create Your account
      </ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Register</Text>
      </ThemedButton>
      <Spacer height={100} />
      <Link href="/login">
        <ThemedText style={{ textAlign: "center" }}>Login</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default register;

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
