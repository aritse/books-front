import React from "react";
import Book from "../Book";

export default function SearchResult(props) {
  return (
    <div className="SearchResult">
      <h3>Results</h3>

      {props.books.length > 0 ? (
        props.books.map((book, i) => <Book key={i} renderedBy="SearchResult" action={props.action} book={book} />)
      ) : (
        <h4>Search for a book to begin</h4>
      )}
    </div>
  );
}
