import { StyleSheet } from "react-native";
import React from "react";
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";
import { useLocalSearchParams } from "expo-router";

const Book = () => {
  const { id } = useLocalSearchParams();
  console.log(id);

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedText>Book Details</ThemedText>
    </ThemedView>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
});
