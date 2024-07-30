import React from 'react';
import { Outlet, useLocation, useParams } from "react-router-dom";
import DeckView from "./DeckView";
  
function DeckParent( {deckDelete} ) {
  const location = useLocation();
  const { deckId } = useParams();

  const isParentRoute = location.pathname === `/decks/${deckId}`;

  return (
    <div>
      {isParentRoute && <DeckView deckId={deckId} deckDelete={deckDelete}/>}
      <Outlet />
    </div>
  );
}

export default DeckParent;