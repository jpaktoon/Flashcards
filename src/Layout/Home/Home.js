import React from "react";
import { Link } from "react-router-dom";

function Home({ decks, deckDelete }) {
  const handleClick = (deckId) => {
    if (window.confirm(
        "Delete this deck? \n \n You will not be able to recover it."
      )) {
        deckDelete(deckId);
      }
  };

  return (
    <div>
      <Link to="/decks/new" className="btn btn-primary">
        + Create Deck
      </Link>
      <ul className="list-unstyled">
        {decks.map((deck) => (
          <li
            className="card-body border"
            value={deck.id}
            id={deck.id}
            key={deck.id}
            name={deck.name}
          >
            <h5 className="card-title">{deck.name}</h5>
            <p className="float-right">{deck.cards.length} cards</p>
            <p className="card-text">{deck.description}</p>
            <Link to={`/decks/${deck.id}`} className="btn btn-dark">
              View
            </Link>
            <Link to={`/decks/${deck.id}/study`} className="btn btn-info">
              Study
            </Link>
            <button onClick={() => handleClick(deck.id)} className="btn btn-danger">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
