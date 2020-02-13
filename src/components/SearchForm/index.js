import React from "react";

export default function SearchForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="bookName">Book</label>
        <input type="text" className="form-control" id="bookName" placeholder="Enter search terms" />
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}
