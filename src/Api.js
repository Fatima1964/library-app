// Api.js
const API_URL = 'https://65597bf4e93ca47020aa3d34.mockapi.io/books';

export const fetchBooks = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      console.error('Error fetching books. Status:', response.status);
      return []; 
    }

    const data = await response.json();
    console.log('Books data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const addBook = async (title) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      console.error('Error adding book. Status:', response.status);
      throw new Error('Error adding book');
    }

    const data = await response.json();
    console.log('Added book data:', data);
    return data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('Error deleting book. Status:', response.status);
      throw new Error('Error deleting book');
    }

    const data = await response.json();
    console.log('Deleted book data:', data);
    return data;
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};
