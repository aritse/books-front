import axios from "axios";

const URL = "http://localhost:8080/api";
const GOOGLE = "https://www.googleapis.com/books/v1/volumes?q=";

const API = {
  getSavedBooks: () => axios.get(`${URL}/books`),
  deleteBook: id => axios.delete(`${URL}/books/${id}`),
  saveBook: book => axios.post(`${URL}/books`, book),
  searchBook: searchString => axios.get(`${GOOGLE}${searchString}`)
};

export default API;
