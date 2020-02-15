import React, { useState } from "react";

export default function SearchForm(props) {
  const [state, setState] = useState({
    searchString: ""
  });

  const handleInputChange = event => setState({ searchString: event.target.value });

  const handleFormSubmit = event => {
    event.preventDefault();
    props.searchBook(state.searchString);
    setState({ searchString: "" });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="bookName">Book</label>
        <input type="text" onChange={handleInputChange} className="form-control" value={state.searchString} id="bookName" placeholder="enter search words" />
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}
