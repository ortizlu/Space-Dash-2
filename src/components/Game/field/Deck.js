import React from 'react';

const Deck = (props) => {

  const def = () => {

  }

  return (
    <div>
      <img onClick={props.deck.drawingAllowed ? props.deckDraw : def} src="./img/deck.png" className="field__deck">
      </img>
      <img src="./img/hidden.png" className="field__card-behind-deck"></img>
    </div>
    
  );
};

export default Deck;

