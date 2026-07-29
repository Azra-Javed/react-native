import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";
import { useLocalSearchParams } from "expo-router";
import { useBooks } from "../../../hooks/useBooks";
import Spacer from "../../../components/Spacer";
import ThemedCard from "../../../components/ThemedCard";
import ThemedLoader from "../../../components/ThemedLoader";

const Book = () => {
  const { id } = useLocalSearchParams();

  const [book, setBook] = useState(null);
  const { fetchBookById } = useBooks();
  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBookById(id);
      setBook(bookData);
    }

    loadBook();
  }, [id]);

  if (!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard>
        <ThemedText style={styles.title}>{book.title}</ThemedText>

        <ThemedText>Written By: {book.author}</ThemedText>

        <Spacer />

        <ThemedText title={true}>Book description:</ThemedText>
        <Spacer height={10} />
        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },

  card: {
    margin: 20,
  },
});
