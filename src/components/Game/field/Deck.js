import React from 'react';

const Deck = (props) => {

  const def = () => {

  }

  return (
    <img onClick={props.deck.drawingAllowed ? props.deckDraw : def} src="./img/deck.png" className="field__deck">
    </img>
  );
};

export default Deck;

