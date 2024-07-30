import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../../utils/api/index";
import CardForm from "./CardForm";

function CardEdit() {
  const navigate = useNavigate();
  const { deckId, cardId } = useParams();

  const [selectedDeck, setSelectedDeck] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function getDeck() {
      setSelectedDeck(await readDeck(deckId, signal));
    }
    async function getCard() {
      setSelectedCard(await readCard(cardId, signal));
    }
    getDeck();
    getCard();
  }, [deckId, cardId]);

  const changeHandler = ({ target }) => {
    setSelectedCard({
      ...selectedCard,
      [target.name]: target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const controller = new AbortController();
    const signal = controller.signal;
    async function cardUpdate() {
      updateCard(selectedCard, signal).then(() =>
        navigate(`/decks/${selectedDeck.id}`)
      );
    }
    cardUpdate();
  };

  if (!selectedDeck || !selectedCard) return "Loading";

  const nav = (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${selectedDeck.id}`}>{selectedDeck.name}</Link>
        </li>
        <li className="breadcrumb-item active">Edit Card {selectedCard.id}</li>
      </ol>
    </nav>
  );

  return (
    <div>
      {nav}
      <h1>Edit Card</h1>
      <CardForm selectedDeck={selectedDeck} targetCard={selectedCard} submitHandler={submitHandler} changeHandler={changeHandler}/>
    </div>
  );
}

export default CardEdit;
