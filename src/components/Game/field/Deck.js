import React from 'react';

const Deck = (props) => {
  return (
    <img onClick={() => props.actions.changeInstructions('potato')} src="./img/deck.png" className="field__deck">
      
    </img>
  );
};

export default Deck;