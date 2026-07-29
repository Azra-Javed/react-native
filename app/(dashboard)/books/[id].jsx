import { StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useBooks } from "../../../hooks/useBooks";
import Spacer from "../../../components/Spacer";
import ThemedCard from "../../../components/ThemedCard";
import ThemedLoader from "../../../components/ThemedLoader";
import ThemedButton from "../../../components/ThemedButton";
import { Colors } from "../../../constants/Colors";

const Book = () => {
  const { id } = useLocalSearchParams();

  const [book, setBook] = useState(null);
  const { fetchBookById, deleteBook } = useBooks();
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

  const router = useRouter();

  const handleDelete = async () => {
    await deleteBook(id);
    setBook(null);
    router.replace("/books");
  };
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

      <ThemedButton style={styles.delete} onPress={handleDelete}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Delete Book</Text>
      </ThemedButton>
    </ThemedView>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
    fontWeight: "bold",
  },

  card: {
    margin: 20,
  },

  delete: {
    marginTop: 40,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: "center",
  },
});
