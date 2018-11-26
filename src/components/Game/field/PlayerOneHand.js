import React from 'react';

const PlayerOneHand = (props) => {

  const expandCard = (e) => {
    console.log(e.target.dataset.position)
    props.activatingCard(e.target.dataset.type, e.target.dataset.pt)
  }

  let cards
  if (props.game.playerOne.showCards) {
    //display cards if show cards is on
    cards = props.game.playerOne.hand.map((card, index) => {
      return (
      <div onClick={expandCard} key={index}>
        <img alt="card" src={"./img/" + card.type + ".png"} data-type={card.type} data-pt={card.pt} data-position={index} className="field__card"></img>
        <p className="field__card__info">{card.type} {card.pt}</p>
      </div>
      )
    })
  } else {
    //otherwise make them all hidden
    cards = props.game.playerOne.hand.map((card, index) => {
      return <img key={index} alt="card" src="./img/hidden.png" className="field__card"></img>
    })
  }
  
  return (
    <div className="field__hand-one">
      {cards}
    </div>
  );
};

export default PlayerOneHand;
