import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createDeck } from "../../utils/api/index";
import DeckForm from "./DeckForm";

function DeckCreate() {
  const navigate = useNavigate();
  const initFormData = { name: "", description: "" };
  const [formData, setFormData] = useState(initFormData);

  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const controller = new AbortController();
    const signal = controller.signal;
    async function deckCreate() {
      createDeck(formData, signal).then((createDeck) => navigate(`/decks/${createDeck.id}`));
    }
    deckCreate();
  };

  const nav = (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Create Deck</li>
      </ol>
    </nav>
  );

  return (
    <div>
      {nav}
      <h1>Create Deck</h1>
      <DeckForm details={formData} submitHandler={submitHandler} changeHandler={changeHandler} cancelTo={"/"} />
    </div>
  );
}

export default DeckCreate;
