import { createContext, useState } from "react";


const DATABASE_ID="6a696afd000d2f8406b2"
const COLLECTION_ID="b"
export const BooksContext = createContext();
export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchBookById(id) {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }

  async function createBook(data) {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }

  async function delteBoook(id) {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }

  return(
    <BooksContext.Provider value={books, fetchBooks, fetchBookById, createBook, delteBoook}>
      {children}
    </BooksContext.Provider>
  )
}
