import React from 'react';

const PlayerTwoHand = (props) => {

  const expandCard = (e) => {
    props.activatingCard(e.target.dataset.type, e.target.dataset.pt)
  }

  let cards
  if (props.game.playerTwo.showCards) {
    //display cards if show cards is on
    cards = props.game.playerTwo.hand.map((card, index) => {
      return (
      <div onClick={expandCard} key={index}>
        <p className="field__card__info">{card.type} {card.pt}</p>
        <img alt="card" src={"./img/" + card.type + ".png"} data-type={card.type} data-pt={card.pt} className="field__card field__card--shown"></img>
      </div>
      )
      
      
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