import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../../../utils/api/index";
import Cards from "./Cards";

function Study() {
  const [selectedDeck, setSelectedDeck] = useState(null);

  const { deckId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function getDeck() {
      setSelectedDeck(await readDeck(deckId, signal));
    }
    getDeck();
  }, [deckId]);

  if (!selectedDeck) {
    return <div>Loading...</div>;
  } else {
    const title = <h3>Study: {selectedDeck.name}</h3>;
    const nav = (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${selectedDeck.id}`}>{selectedDeck.name}</Link>
          </li>
          <li className="breadcrumb-item active">Study</li>
        </ol>
      </nav>
    );

    const deckLength = selectedDeck.cards.length;
    if (deckLength < 3) {
      return (
        <div>
          {nav}
          {title}
          <h4>Not enough cards.</h4>
          <p>
            You need at least 3 cards to study. There are {deckLength} cards in
            this deck.
          </p>
          <Link
            to={`/decks/${selectedDeck.id}/cards/new`}
            className="btn btn-primary"
          >
            + Add Cards
          </Link>
        </div>
      );
    }
    return (
      <div>
        {nav}
        {title}
        <Cards cards={selectedDeck.cards} />
      </div>
    );
  }
}

export default Study;
