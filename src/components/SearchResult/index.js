import React from "react";
import Book from "../Book";

export default function SearchResult(props) {
  return (
    <div className="card col-6 mx-auto SearchResult mt-3">
      <div className="card-header font-weight-bolder">Results</div>
      <div className="card-body align">
        {props.books.length > 0 ? (
          props.books.map((book, i) => <Book key={i} renderedBy="SearchResult" action={props.action} book={book} />)
        ) : (
          <h4 className="text-center">Search for a book to begin</h4>
        )}
      </div>
    </div>
  );
}
