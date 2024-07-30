import React, { useState, useEffect } from "react";
import { readDeck, deleteCard } from "../../utils/api/index";
import { Link } from "react-router-dom";
import CardList from "./Card/CardList";

function DeckView({ deckId, deckDelete }) {
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [cardToDelete, setCardToDelete] = useState(-1);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function getDeck() {
      setSelectedDeck(await readDeck(deckId, signal));
    }
    async function deletion() {
      deleteCard(cardToDelete, signal)
      .then(() => setCardToDelete(-1));
    }

    if(cardToDelete !== -1) deletion();
    else getDeck();

  }, [deckId, cardToDelete]);

  const handleClick = (event) => {
    event.preventDefault();
    if (
      window.confirm(
        "Delete this deck? \n \n You will not be able to recover it."
      )
    ) {
      deckDelete(deckId);
    }
  };

  const cardDelete = (cardId) => setCardToDelete(cardId);

  if (!selectedDeck) {
    return <div>Loading...</div>;
  }

  const nav = (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">{selectedDeck.name}</li>
      </ol>
    </nav>
  );

  const deckDescription = (
    <section>
      <h5 className="card-title">{selectedDeck.name}</h5>
      <p className="card-text">{selectedDeck.description}</p>
      <Link to={`/decks/${selectedDeck.id}/edit`} className="btn btn-secondary">
        Edit
      </Link>
      <Link to={`/decks/${selectedDeck.id}/study`} className="btn btn-info">
        Study
      </Link>
      <Link
        to={`/decks/${selectedDeck.id}/cards/new`}
        className="btn btn-primary"
      >
        Add Cards
      </Link>
      <button onClick={handleClick} className="btn btn-danger">
        Delete
      </button>
    </section>
  );

  const cardList = (
    <section>
      <h3>Cards</h3>
      <CardList cards={selectedDeck.cards} cardDelete={cardDelete} />
    </section>
  );

  return (
    <div>
        {nav}
        {deckDescription}
        {cardList}
    </div>
);
}

export default DeckView;
