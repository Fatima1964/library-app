// AddBookForm.js
import React from 'react';

function AddBookForm({ newBookTitle, setNewBookTitle, handleAddBook }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBook();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="newBookTitle"
        placeholder='New Book Title'
        value={newBookTitle}
        onChange={(e) => setNewBookTitle(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
