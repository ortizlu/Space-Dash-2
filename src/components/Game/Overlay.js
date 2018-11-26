import React, { Component } from 'react'
import './Game.css'
import TypedIntro from './TypedIntro'
import ChooseShip from './ChooseShip'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import * as shipActions from '../../actions/shipActions'
import * as gameMainActions from '../../actions/gameMainActions'
import * as deckActions from '../../actions/deckActions'
import PlayerOneAvatar from './dashboard/PlayerOneAvatar'
import PlayerTwoAvatar from './dashboard/PlayerTwoAvatar'
import PlayerOneSP from './dashboard/PlayerOneSP'
import PlayerTwoSP from './dashboard/PlayerTwoSP'
import Field from './field/Field'

class Overlay extends Component {

  //============ MAIN SHIP PICKING METHODS==================
  allowedToChooseShip = () => {
    this.props.actions.chooseShips()
  }

  pickShip = (e) => {
    let pick = e.target.name
    //add their ship to their object based on who's turn is it. The second parameter is the ship itself (name and image url)
    this.props.actions.pickShip({name: pick, image: e.target.dataset.image})
    //remove ship from array
    this.props.actions.removeShip(pick)
    //change to next person's turn
    this.props.actions.changeTurn()
    //if its the second player's turn, proceed to start the game
    if (this.props.game.turn) {
     this.props.actions.chooseShipsComplete()
    }
  }
  //============ MAIN SHIP PICKING METHODS==================

  //============ MAIN GAME METHODS==================

  draw = () => {
    //get the top card of the deck
    let topCard = this.props.deck.cardDeck[0]
    //add card to player's hand
    this.props.actions.addToHand(topCard)
    //remove top card and add 
    this.props.actions.draw(topCard)
  }

  deckDraw = () => {
    this.props.actions.drawingAnimations()
    this.draw()
    //disable drawing again
    this.props.actions.allowedToDraw()
    //give instructions on what to do next
    this.props.actions.changeInstructions(['','Make your move.','Use one of the cards shown'])
  }

  aTurn = () => {

    //grab the first five and set it to player one
    this.props.actions.firstFive('playerOne', this.props.deck.firstFiveOne)

    //grab the first five and set it to player two
    this.props.actions.firstFive('playerTwo',this.props.deck.firstFiveTwo)

    let player
    if (!this.props.game.turn) {
      player = 'Player 1'
    } else {
      player = 'Player 2'
    }

    //initial instructions given.
    this.props.actions.changeInstructions(['','Welcome to the board'])

    //, 'To the left is the deck', 'To the right is the discard pile', "Below are Player One's cards", "And above are Player Two's cards", "Lastly, The chosen ships are also displayed along with each Player's ShipPoints.", "Let the games begin!", `${player}: Your Turn, draw.`])

  }

  activatingCard = (type, pt, index) => {
    let typeFull = ''
    switch (type) {
      case 'att':
        typeFull = 'attack'
        break
      case 'def':
        typeFull = 'defense'
        break
      case 'sp':
        typeFull = 'ShipPoint'
        break
      default:
        break
    }

    let plural
    if (pt > 1) {
      plural = 'points'
    } else {
      plural = 'point'
    }
    this.props.actions.changeInstructions(['',`Use ${typeFull} card for ${pt} ${plural}?`])

    this.props.actions.cardStaged(type, parseInt(pt), parseInt(index))
  }

  //============ MAIN GAME METHODS==================

  

  render() {
    let center
    if (this.props.game.chooseShipsComplete) {
      center = <Field activatingCard={this.activatingCard} deckDraw={this.deckDraw} aTurn={this.aTurn} {...this.props}></Field>
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
        {this.props.game.playerTwo.ship ? <PlayerTwoAvatar {...this.props} image={this.props.game.playerTwo.ship.image}></PlayerTwoAvatar> : <span></span>}
        {/* SHOW PLAYER TWO SHIP POINTS */}
        {this.props.game.playerTwo.ship ? <PlayerTwoSP sp={this.props.game.playerTwo.sp}></PlayerTwoSP> : <span></span>}
        {/* ===========PLAYER TWO DASHBOARD========== */}


        {/* DISPLAY THE INTRO TEXT FIRST, THEN CHOOSE-SHIP COMPONENT, THEN DISPLAY THE GAME SCREEN */}
        {center}

        
        {/* =========PLAYER ONE DASHBOARD========== */}
        {/* SHOW PLAYER ONE AVATAR */}
        {this.props.game.playerOne.ship ? <PlayerOneAvatar {...this.props} image={this.props.game.playerOne.ship.image}></PlayerOneAvatar> : <span></span>}
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
    game: state.game,
    deck: state.deck
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...shipActions, ...gameMainActions, ...deckActions}, dispatch)
  }
}

const connection = connect(mapStateToProps, mapDispatchToProps)

const wrappedComponent = connection(Overlay)

export default wrappedComponent
