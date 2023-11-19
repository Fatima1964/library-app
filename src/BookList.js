// BookList.js
import React from 'react';
import "./BookList.css";

function BookList({ books, onDelete }) {
  if (!Array.isArray(books)) {
    console.error('Books data is not an array:', books);
    return null;
  }

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          {book.title}
          <button onClick={() => onDelete(book.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
