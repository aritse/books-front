import React, { useState } from "react";
import SearchForm from "../SearchForm";
import SearchResult from "../SearchResult";
import API from "../../utils/API";

export default function BookSearch(props) {
  const [state, setState] = useState({
    result: []
  });

  function handleSearch(searchString) {
    API.searchBook(searchString).then(({ data }) => {
      const books = data.items.map(({ volumeInfo }) => {
        const vi = {};
        vi.title = volumeInfo.title;
        vi.authors = volumeInfo.authors;
        vi.description = volumeInfo.description || "No description";
        vi.image = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/138x200";
        vi.link = volumeInfo.infoLink;
        return vi;
      });

      setState({ result: books });
    });
  }

  return (
    <div className="BookSearch">
      <SearchForm searchBook={handleSearch} />
      <SearchResult action={props.action} books={state.result} />
    </div>
  );
}
