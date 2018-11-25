import React from 'react';

const PlayerTwoHand = (props) => {
  let cards = props.game.playerTwo.hand.map(card => {
    return <img alt="card" src="./img/hidden.png" data-type={card.type} data-pt={card.pt} className="field__card"></img>
  })
  return (
    <div className="field__hand-two">
      {cards}
    </div>
  );
};

export default PlayerTwoHand;