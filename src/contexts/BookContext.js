import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const initialBooks = [
  { id: uuid(), title: "To kill a mokingbird", author: "Steve Gellar" },
  { id: uuid(), title: "Angel & Demons", author: "Dan Abramov" },
  {
    id: uuid(),
    title: "Harry potter and deathly hallows",
    author: "J.K.Rowling",
  },
  {
    id: uuid(),
    title: "Harry pooter and chamber of secrets",
    author: "J.K.Rowling",
  },
];

export default function BookContextProvider(props) {
  const [books, setBooks] = useState(initialBooks);
  const addBook = (title, author) => {
    setBooks([...books, { id: uuid(), title, author }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books: books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}
