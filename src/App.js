import React from "react";
import BookSearch from "./components/BookSearch";
import SavedBooks from "./components/SavedBooks";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const Library = [
    {
      id: 1,
      authors: ["James Wallace", "Jim Erickson"],
      description:
        "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
      title: "Hard Drive: Bill Gates and the Making of the Microsoft Empire"
    },
    {
      id: 2,
      authors: ["Suzanne Collins"],
      description:
        "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
      title: "The Hunger Games"
    }
  ];

  function handleSave(event) {
    const book = JSON.parse(event.target.getAttribute("data-book"));
    Library.push(book);
    console.log("added:", book.title);
  }

  function handleDelete(event) {
    const index = Library.indexOf(event.target.value);
    Library.splice(index, 1);
  }

  return (
    <div>
      <Router>
        <Navbar />
        <Heading />
        <Switch>
          <Route exact path="/saved">
            <SavedBooks action={handleDelete} />
          </Route>
          <Route path="*">
            <BookSearch action={handleSave} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
