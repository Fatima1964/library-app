// App.js
import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import { fetchBooks, addBook, deleteBook } from './Api';
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [newBookTitle, setNewBookTitle] = useState('');

  useEffect(() => {
    fetchBooks()
      .then(data => setBooks(Array.isArray(data) ? data : []))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const handleAddBook = async () => {
    if (newBookTitle.trim() === '') {
      console.error('Please enter a book title.');
      return;
    }

    try {
      const newBook = await addBook(newBookTitle);
      setBooks(prevBooks => [...prevBooks, newBook]);
      setNewBookTitle('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <div className="welcome-container">
      <h1>📚Welcome To The Ultimate Book Library</h1>
      <p>📔Search And Save Your Favorite Books.🔍</p>
    </div>
      {/* AddBookForm component */}
      <AddBookForm
        newBookTitle={newBookTitle}
        setNewBookTitle={setNewBookTitle}
        handleAddBook={handleAddBook}
      />

      {/* Display the list of books */}
      {Array.isArray(books) && books.length > 0 ? (
        <BookList books={books} onDelete={handleDeleteBook} />
      ) : (
        <p>Loading Books......</p>
      )}
    </div>
  );
}

export default App;
