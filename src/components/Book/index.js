import React from "react";
import "./style.css";

export default function Book(props) {
  const detail = JSON.stringify(props.book);

  return (
    <div className="Book">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button className="btn btn-secondary">
          <a href={props.book.link}>View</a>
        </button>

        <button className="btn btn-primary" data-book={detail} onClick={event => props.action(event)}>
          {props.renderedBy === "SearchResult" ? "Save" : "Delete"}
        </button>
      </div>

      <h5>{props.book.title}</h5>
      <p>Written by {props.book.authors}</p>
      <img src={props.book.image} className="rounded" alt="thumbnail"></img>
      <p>{props.book.description}</p>
    </div>
  );
}
