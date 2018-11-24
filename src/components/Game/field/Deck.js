import React from 'react';

const Deck = (props) => {
  return (
    <img onClick={props.aTurn} src="./img/deck.png" className="field__deck">
      
    </img>
  );
};

export default Deck;