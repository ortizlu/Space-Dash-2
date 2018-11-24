import React from 'react';

const Deck = (props) => {
  return (
    <img onClick={() => props.actions.draw(props.deck.cardDeck[0])} src="./img/deck.png" className="field__deck">
      
    </img>
  );
};

export default Deck;