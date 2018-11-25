import React from 'react';

const PlayerOneHand = (props) => {
  let cards = props.game.playerOne.hand.map((card, index) => {
    return <img key={index} alt="card" src="./img/hidden.png" data-type={card.type} data-pt={card.pt} className="field__card"></img>
  })
  return (
    <div className="field__hand-one">
      {cards}
    </div>
  );
};

export default PlayerOneHand;