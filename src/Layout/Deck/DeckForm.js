import React from "react";
import { Link } from "react-router-dom";

function DeckForm({ details, submitHandler, changeHandler, cancelTo }) {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={details.name}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            value={details.description}
            rows={5}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="form-actions">
          <Link to={cancelTo} className="btn btn-secondary">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeckForm;
