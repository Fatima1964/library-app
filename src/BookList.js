// BookList.js
import React from 'react';
import "./BookList.css";

// Functional component for displaying a list of books
function BookList({ books, onDelete }) {
  // Check if the 'books' prop is an array
  if (!Array.isArray(books)) {
    console.error('Books data is not an array:', books);
    return null; // Return null if 'books' is not an array
  }

  // JSX for rendering the list of books
  return (
    <ul>
      {/* Map through each book in the 'books' array and display it in a list item */}
      {books.map(book => (
        <li key={book.id}>
          {book.title}
          {/* Button to delete the book, onClick calls the 'onDelete' prop with the book's ID */}
          <button onClick={() => onDelete(book.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
