import React from 'react';
import { Link } from "react-router-dom";

function CardList({ cards, cardDelete }) {
  const handleClick = (cardId) => {
    if (
      window.confirm(
        "Delete this card? \n \n You will not be able to recover it."
      )
    ) {
      cardDelete(cardId);
    }
  };

  return (
    <ul className="list-unstyled">
      {cards.map((card) => (
        <li
          className="card-body border"
          value={card.id}
          id={card.id}
          key={card.id}
          name={card.deckId}
        >
          <div className="row">
            <p className="card-text col-12">
              <span className="highlight-question">Question:</span> {card.front}
            </p>
            <p className="card-text col-12">
              <span className="highlight-answer">Answer:</span> {card.back}
            </p>
          </div>
          <div className="row mt-3">
            <div className="col-auto">
              <Link
                to={`/decks/${card.deckId}/cards/${card.id}/edit`}
                className="btn btn-secondary me-2"
              >
                Edit
              </Link>
              <button onClick={() => handleClick(card.id)} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CardList;
