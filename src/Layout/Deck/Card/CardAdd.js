import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck, createCard } from "../../../utils/api/index";
import CardForm from "./CardForm";

function CardAdd() {
  const initCardData = { front: "", back: "" };

  const { deckId } = useParams();

  const [selectedDeck, setSelectedDeck] = useState(null);
  const [cardToAdd, setCardToAdd] = useState(initCardData);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function getDeck() {
      setSelectedDeck(await readDeck(deckId, signal));
    }
    getDeck();
  }, [deckId]);

  const changeHandler = ({ target }) => {
    setCardToAdd({
      ...cardToAdd,
      [target.name]: target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const controller = new AbortController();
    const signal = controller.signal;
    async function addCard() {
      createCard(selectedDeck.id, cardToAdd, signal).then(() => setCardToAdd(initCardData));
    }
    addCard();
  };

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
        <li className="breadcrumb-item active">Add Card</li>
      </ol>
    </nav>
  );

  return (
    <div>
      {nav}
      <h1>{selectedDeck.name}: Add Card</h1>
      <CardForm selectedDeck={selectedDeck} targetCard={cardToAdd} submitHandler={submitHandler} changeHandler={changeHandler}/>
    </div>
  );
}

export default CardAdd;
