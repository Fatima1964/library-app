// App.js
import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import { fetchBooks, addBook, deleteBook } from './Api';
import "./App.css";

// Main component for the application
function App() {
  // State to manage the list of books and the new book title input
  const [books, setBooks] = useState([]);
  const [newBookTitle, setNewBookTitle] = useState('');

  // useEffect to fetch books from the API when the component mounts
  useEffect(() => {
    fetchBooks()
      .then(data => setBooks(Array.isArray(data) ? data : []))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  // Function to handle the addition of a new book
  const handleAddBook = async () => {
    // Check if the new book title is not empty
    if (newBookTitle.trim() === '') {
      console.error('Please enter a book title.');
      return;
    }

    try {
      // Add the new book to the API
      const newBook = await addBook(newBookTitle);
      // Update the list of books in the state
      setBooks(prevBooks => [...prevBooks, newBook]);
      // Clear the new book title input
      setNewBookTitle('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  // Function to handle the deletion of a book
  const handleDeleteBook = async (id) => {
    try {
      // Delete the book from the API
      await deleteBook(id);
      // Update the list of books in the state, removing the deleted book
      setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  // JSX for the main application component
  return (
    <div>
      <div className="welcome-container">
        <h1>📚Bookshelf Bliss: Your Library, Your Way!</h1>
               <p>Shelf Harmony:📔Search And Save Your Favorite Books Because Your Books Deserve a Home🔍</p>
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
