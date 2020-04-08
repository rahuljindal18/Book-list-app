import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

export default function NewBookForm() {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBook(title, author);
    setAuthor("");
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a title"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Add an author"
        value={author}
        onChange={(evt) => setAuthor(evt.target.value)}
      />
      <input type="submit" value="Add Book" />
    </form>
  );
}
