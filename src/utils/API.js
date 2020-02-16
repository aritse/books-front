import axios from "axios";

// const URL = "http://localhost:8080";
const URL = "https://ari-book-search-api.herokuapp.com";
const GOOGLE = "https://www.googleapis.com/books/v1/volumes?q=";

const API = {
  getSavedBooks: () => axios.get(`${URL}/api/books`),
  deleteBook: id => axios.delete(`${URL}/api/books/${id}`),
  saveBook: book => axios.post(`${URL}/api/books`, book),
  searchBook: searchString => axios.get(`${GOOGLE}${searchString}`)
};

export default API;
