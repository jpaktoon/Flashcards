import React from "react";
import { Link } from "react-router-dom";

function CardForm({ selectedDeck, targetCard, submitHandler, changeHandler }) {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="front">Front</label>
          <textarea
            name="front"
            id="front"
            className="form-control"
            value={targetCard.front}
            rows={3}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="back">Back</label>
          <textarea
            name="back"
            id="back"
            className="form-control"
            value={targetCard.back}
            rows={3}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="form-actions">
          <Link to={`/decks/${selectedDeck.id}`} className="btn btn-secondary">
            Done
          </Link>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default CardForm;
