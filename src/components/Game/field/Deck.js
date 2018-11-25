import React from 'react';

const Deck = (props) => {

  //an empty function to prevent drawing abilities
  const def = () => {

  }

  let animation
  if (!props.game.turn) {
    animation = 'field__card-behind-deck field__card-behind-deck--animated-one'
  } else {
    animation = 'field__card-behind-deck field__card-behind-deck--animated-two'
  }

  return (
    <div>
      <img onClick={props.deck.drawingAllowed ? props.deckDraw : def} src="./img/deck.png" className="field__deck">
      </img>
      <img src="./img/hidden.png" className={props.deck.drawingAnimations ? animation : 'field__card-behind-deck'}></img>
    </div>

  );
};

export default Deck;

