import React from "react";
import Book from "../Book";

export default function SavedBooks(props) {
  return (
    <div className="SavedBooks">
      <h3>Saved Books</h3>
      {props.books.map((book, i) => (
        <Book key={i} renderedBy="SavedBooks" action={props.action} book={book} />
      ))}
    </div>
  );
}
