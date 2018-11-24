import React from 'react';
import PlayerOneHand from './PlayerOneHand'
import PlayerTwoHand from './PlayerTwoHand'
import Deck from './Deck'
import Graveyard from './Graveyard'
import './Field.css'

const Field = (props) => {
  return (
    <div>
      <PlayerTwoHand></PlayerTwoHand>

      <Deck></Deck>
      <Graveyard></Graveyard>
      
      <PlayerOneHand></PlayerOneHand>
    </div>
  );
};

export default Field;