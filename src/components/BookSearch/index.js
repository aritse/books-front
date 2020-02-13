import React from "react";
import SearchForm from "../SearchForm";
import SearchResult from "../SearchResult";

export default function BookSearch(props) {
  const result = [
    {
      id: 3,
      authors: ["Nelson Mandela"],
      description:
        "Nelson Mandela is one of the great moral and political leaders of our time: an international hero whose lifelong dedication to the fight against racial oppression in South Africa won him the Nobel Peace Prize and the presidency of his country.",
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "https://www.google.com/books/edition/Long_Walk_to_Freedom/RHwLqVrnXgIC?hl=en",
      title: "Long Walk to Freedom: The Autobiography of Nelson Mandela"
    },
    {
      id: 4,
      authors: ["Amartya Sen"],
      description:
        "By the winner of the 1988 Nobel Prize in Economics, an essential and paradigm-altering framework for understanding economic development--for both rich and poor--in the twenty-first century.",
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "https://www.google.com/books/edition/Development_as_Freedom/XmfIeDy_taYC?hl=en",
      title: "Development as Freedom"
    }
  ];

  return (
    <div className="BookSearch">
      <h3>Book Search</h3>
      <SearchForm />
      <SearchResult action={props.action} result={result} />
    </div>
  );
}
