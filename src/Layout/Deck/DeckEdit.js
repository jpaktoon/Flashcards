import React, { useState, useEffect } from "react";
import { readDeck, updateDeck } from "../../utils/api/index";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import DeckForm from "./DeckForm";

function DeckEdit() {
  const navigate = useNavigate();
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

  const changeHandler = ({ target }) => {
    setSelectedDeck({
      ...selectedDeck,
      [target.name]: target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const controller = new AbortController();
    const signal = controller.signal;
    async function deckUpdate() {
        updateDeck(selectedDeck, signal)
            .then(() => navigate(`/decks/${selectedDeck.id}`))
    }
    deckUpdate();
}

  if (!selectedDeck) {
    return <div>Loading...</div>;
  }

  const nav = (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${selectedDeck.id}`}>{selectedDeck.name}</Link>
        </li>
        <li className="breadcrumb-item active">Edit Deck</li>
      </ol>
    </nav>
  );

  return (
    <div>
      {nav}
      <h1>Edit Deck</h1>
      <DeckForm details={selectedDeck} submitHandler={submitHandler} changeHandler={changeHandler} cancelTo={`/decks/${selectedDeck.id}`}/>
    </div>
  );
}

export default DeckEdit;
