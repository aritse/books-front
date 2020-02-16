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
        const vi = {
          title: volumeInfo.title,
          authors: volumeInfo.authors,
          description: volumeInfo.description,
          image: volumeInfo.imageLinks.thumbnail,
          link: volumeInfo.infoLink
        };
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
