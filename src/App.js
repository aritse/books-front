import React, { useState, useEffect } from "react";
import BookSearch from "./components/BookSearch";
import SavedBooks from "./components/SavedBooks";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import API from "./utils/API";

function App() {
  const [library, setLibrary] = useState([]);
  useEffect(() => {
    API.getSavedBooks().then(res => setLibrary(res.data));
  }, []);

  function handleSave(event) {
    const book = JSON.parse(event.target.getAttribute("data-book"));
    API.saveBook(book).then(() => {
      API.getSavedBooks().then(res => setLibrary(res.data));
    });
    console.log("saved:", book.title);
  }

  function handleDelete(event) {
    const book = JSON.parse(event.target.getAttribute("data-book"));
    API.deleteBook(book._id).then(() => {
      API.getSavedBooks().then(res => setLibrary(res.data));
    });
    console.log("deleted:", book.title);
  }

  return (
    <div>
      <Router>
        <Navbar />
        <Heading />
        <Switch>
          <Route exact path="/saved">
            <SavedBooks action={handleDelete} books={library} />
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
