// Api.js

// API endpoint for books
const API_URL = 'https://65597bf4e93ca47020aa3d34.mockapi.io/books';

// Function to fetch books from the API
export const fetchBooks = async () => {
  try {
    const response = await fetch(API_URL);

    // Check if the response is successful
    if (!response.ok) {
      console.error('Error fetching books. Status:', response.status);
      return []; 
    }

    // Parse the JSON data from the response
    const data = await response.json();
    console.log('Books data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error; 
  }
};

// Function to add a new book to the API
export const addBook = async (title) => {
  try {
    // Send a POST request to add a new book
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });

    // Check if the response is successful
    if (!response.ok) {
      console.error('Error adding book. Status:', response.status);
      throw new Error('Error adding book');
    }

    // Parse the JSON data from the response
    const data = await response.json();
    console.log('Added book data:', data);
    return data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error; // Throw the error to handle it in the calling code
  }
};

// Function to delete a book from the API
export const deleteBook = async (id) => {
  try {
    // Send a DELETE request to remove a book by ID
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    // Check if the response is successful
    if (!response.ok) {
      console.error('Error deleting book. Status:', response.status);
      throw new Error('Error deleting book');
    }

    // Parse the JSON data from the response
    const data = await response.json();
    console.log('Deleted book data:', data);
    return data;
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error; // Throw the error to handle it in the calling code
  }
};
