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
    <div className="card col-6 mx-auto ">
      <div className="card-header font-weight-bolder">Book Search</div>
      <div className="card-body">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="bookName">Book</label>
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control"
              value={state.searchString}
              id="bookName"
              placeholder="enter search words"
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
