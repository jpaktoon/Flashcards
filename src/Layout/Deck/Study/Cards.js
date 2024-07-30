import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cards({ cards }) {

  const navigate = useNavigate();

  const totalCards = cards.length;

  const [selectedCard, setSelectedCard] = useState(0);

  const [isFont, setIsFont] = useState(true);

  const flipHandler = () => setIsFont((isFont) => !isFont);

  const nextHandler = () => {
    if(selectedCard == totalCards - 1) { // Last card
        if(window.confirm("Restart cards? \n \n Click 'cancel' to return to the home page.")) {
            setSelectedCard(0);
        } else {navigate("/")}
    } else {
        setSelectedCard(selectedCard + 1);
    }
    setIsFont(true);
  };

  return (
    <div className="card-body">
      <h5 className="card-title">
        Card {selectedCard + 1} of {totalCards}
      </h5>
      <p className="card-text">
        {isFont ? cards[selectedCard].front : cards[selectedCard].back}
      </p>
      <button onClick={flipHandler} className="btn btn-primary">
        Flip
      </button>
      {!isFont && selectedCard < totalCards && (
        <button onClick={nextHandler} className="btn btn-dark">
          Next
        </button>
      )}
    </div>
  );
}

export default Cards;
