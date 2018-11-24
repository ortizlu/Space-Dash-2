import React, { Component } from 'react'
import './Game.css'
import TypedIntro from './TypedIntro'
import ChooseShip from './ChooseShip'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import * as shipActions from '../../actions/shipActions'
import * as gameMainActions from '../../actions/gameMainActions'

class Overlay extends Component {


  allowedToChooseShip = () => {
    this.props.actions.chooseShips()
  }

  pickShip = (e) => {
    let pick = e.target.name
    //add their ship to their object based on who's turn is it. The second parameter is the ship itself (name and image url)
    this.props.actions.pickShip(this.props.game.turn, {name: pick, image: e.target.dataset.image})
    //remove ship from array
    this.props.actions.removeShip(pick)
    //change to next person's turn
    this.props.actions.changeTurn(this.props.game.turn)
  }

  

  render() {
    return (
      <div className="overlay">
        {this.props.ship.chooseShips ? (
          <ChooseShip {...this.props} pickShip={this.pickShip} />
        ) : (
          <TypedIntro allowedToChooseShip={this.allowedToChooseShip} />
        )}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ship: state.ship,
    game: state.game
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...shipActions, ...gameMainActions}, dispatch)
  }
}

const connection = connect(mapStateToProps, mapDispatchToProps)

const wrappedComponent = connection(Overlay)

export default wrappedComponent
