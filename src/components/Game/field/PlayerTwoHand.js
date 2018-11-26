import React from 'react';

const PlayerTwoHand = (props) => {
  let cards
  if (props.game.playerTwo.showCards) {
    //display cards if show cards is on
    cards = props.game.playerTwo.hand.map((card, index) => {
      return <img key={index} alt="card" src={"./img/" + card.type + ".png"} data-type={card.type} data-pt={card.pt} className="field__card field__card--shown"></img>
    })
  } else {
    //otherwise make them all hidden
    cards = props.game.playerTwo.hand.map((card, index) => {
      return <img key={index} alt="card" src="./img/hidden.png" className="field__card"></img>
    })
  }
  return (
    <div className="field__hand-two">
      {cards}
    </div>
  );
};

export default PlayerTwoHand;