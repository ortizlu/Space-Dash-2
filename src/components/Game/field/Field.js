import React, {Component} from 'react';
import PlayerOneHand from './PlayerOneHand'
import PlayerTwoHand from './PlayerTwoHand'
import Deck from './Deck'
import Graveyard from './Graveyard'
import './Field.css'
import Instructions from './Instructions';

class Field extends Component {

  componentDidMount() {
    this.props.aTurn()
  }

  render() {
    return (
      <div>
          <PlayerTwoHand activatingCard={this.props.activatingCard} {...this.props}></PlayerTwoHand>

          <Deck deckDraw={this.props.deckDraw} {...this.props}></Deck>

          <Instructions {...this.props} message={this.props.game.instructions}></Instructions>

          <Graveyard></Graveyard>

          <PlayerOneHand activatingCard={this.props.activatingCard} {...this.props}></PlayerOneHand>
      </div>
    );
  }
}

export default Field;

