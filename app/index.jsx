import { StyleSheet, Text } from "react-native";
import ThemedView from "../components/ThemedView";
import { Link } from "expo-router";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} height={200} width={200} />
      <Spacer height={20} />
      {/* multiple source of styles */}
      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>
      <Spacer height={20} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />

      <Link href="/login" style={styles.link}>
        <ThemedText>Login page</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Regiter Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
