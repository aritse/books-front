import React from "react";
import Book from "../Book";

export default function SavedBooks(props) {
  return (
    <div className="card col-6 mx-auto SavedBooks">
      <div className="card-header font-weight-bolder">Saved Books</div>
      <div className="card-body">
        {props.books.map((book, i) => (
          <Book key={i} renderedBy="SavedBooks" action={props.action} book={book} />
        ))}
      </div>
    </div>
  );
}
