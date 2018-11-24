import React, { Component } from 'react'
import './Game.css'
import TypedIntro from './TypedIntro'
import ChooseShip from './ChooseShip'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import * as shipActions from '../../actions/shipActions'
import * as gameMainActions from '../../actions/gameMainActions'
import PlayerOneAvatar from './dashboard/PlayerOneAvatar'
import PlayerTwoAvatar from './dashboard/PlayerTwoAvatar'
import PlayerOneSP from './dashboard/PlayerOneSP'
import PlayerTwoSP from './dashboard/PlayerTwoSP'
import Field from './field/Field'

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
    //if its the second player's turn, proceed to start the game
    if (this.props.game.turn) {
     this.props.actions.chooseShipsComplete()
    }
  }

  

  render() {
    let center
    if (this.props.game.chooseShipsComplete) {
      center = <Field></Field>
    } else {
      center = this.props.ship.chooseShips ? (
        <ChooseShip {...this.props} pickShip={this.pickShip} />
      ) : (
        <TypedIntro allowedToChooseShip={this.allowedToChooseShip} />
      )
    }
    return (
      <div className="overlay">

        {/* =========PLAYER TWO DASHBOARD========== */}
        {/* SHOW PLAYER TWO AVATAR */}
        {this.props.game.playerTwo.ship ? <PlayerTwoAvatar image={this.props.game.playerTwo.ship.image}></PlayerTwoAvatar> : <span></span>}
        {/* SHOW PLAYER TWO SHIP POINTS */}
        {this.props.game.playerTwo.ship ? <PlayerTwoSP sp={this.props.game.playerTwo.sp}></PlayerTwoSP> : <span></span>}
        {/* ===========PLAYER TWO DASHBOARD========== */}


        {/* DISPLAY THE INTRO TEXT FIRST, THEN CHOOSESHIP COMPONENT, THEN DISPLAY THE GAME SCREEN */}
        {center}

        
        {/* =========PLAYER ONE DASHBOARD========== */}
        {/* SHOW PLAYER ONE AVATAR */}
        {this.props.game.playerOne.ship ? <PlayerOneAvatar image={this.props.game.playerOne.ship.image}></PlayerOneAvatar> : <span></span>}
        {/* SHOW PLAYER ONE SHIP POINTS */}
        {this.props.game.playerOne.ship ? <PlayerOneSP sp={this.props.game.playerOne.sp}></PlayerOneSP> : <span></span>}
        {/* =========PLAYER ONE DASHBOARD========== */}

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
