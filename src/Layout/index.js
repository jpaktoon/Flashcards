import React, { useState, useEffect } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks, deleteDeck } from "../utils/api/index";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import DeckParent from "./Deck/DeckParent";
import DeckCreate from "./Deck/DeckCreate";
import DeckEdit from "./Deck/DeckEdit";
import Study from "./Deck/Study/Study";
import CardAdd from "./Deck/Card/CardAdd";
import CardEdit from "./Deck/Card/CardEdit";

function Layout() {
  const navigate = useNavigate();

  const [decks, setDecks] = useState([]);
  const [toDelete, setToDelete] = useState(-1);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getDecks() {
      listDecks(signal).then((result) => setDecks(result));
    }

    async function deletion() {
      deleteDeck(toDelete, signal)
        .then(() => {
          setToDelete(-1);
        })
        .then(() => navigate("/"));
    }

    if (toDelete !== -1) {
      deletion();
    } else {
      getDecks();
    }

    return () => {
      controller.abort();
    };
  }, [toDelete, location.pathname]);


  const deckDelete = (deckId) => setToDelete(deckId); 

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home decks={decks} deckDelete={deckDelete} />} />
          <Route path="/decks/new" element={<DeckCreate />} />
          <Route path="/decks/:deckId" element={<DeckParent deckDelete={deckDelete}/>}>
            <Route path="study" element={<Study />}/>
            <Route path="edit" element={<DeckEdit />}/>
            <Route path="cards/new" element={<CardAdd />} />
            <Route path="cards/:cardId/edit" element={<CardEdit />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </>
  );
}

export default Layout;
