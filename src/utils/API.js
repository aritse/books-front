import axios from "axios";

const URL = "http://localhost:8080/api";
const API = {
  getSavedBooks: () => axios.get(`${URL}/books`),
  deleteBook: id => axios.delete(`${URL}/books/${id}`),
  saveBook: book => axios.post(`${URL}/books`, book)
};

export default API;
