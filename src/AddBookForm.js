// AddBookForm.js
import React from 'react';

// Functional component for the form to add a new book
function AddBookForm({ newBookTitle, setNewBookTitle, handleAddBook }) {
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleAddBook(); // Calls the parent component's function to add the book
  };

  // JSX for the form
  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for the new book title */}
      <input
        type="text"
        id="newBookTitle"
        placeholder='Enter Book Title'
        value={newBookTitle}
        onChange={(e) => setNewBookTitle(e.target.value)}
      />
      
      {/* Submit button to add the book */}
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
