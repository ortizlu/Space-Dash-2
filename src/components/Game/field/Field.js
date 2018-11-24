import React from 'react';
import PlayerOneHand from './PlayerOneHand'
import PlayerTwoHand from './PlayerTwoHand'
import Deck from './Deck'
import Graveyard from './Graveyard'
import './Field.css'
import Instructions from './Instructions';

const Field = (props) => {
  return (
    <div>
      <PlayerTwoHand></PlayerTwoHand>

      <Deck {...props}></Deck>

      <Instructions message={props.game.instructions}></Instructions>

      <Graveyard></Graveyard>
      
      <PlayerOneHand></PlayerOneHand>
    </div>
  );
};

export default Field;