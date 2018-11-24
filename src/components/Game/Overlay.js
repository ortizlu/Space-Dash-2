import React, { Component } from 'react'
import './Game.css'
import TypedIntro from './TypedIntro'
import ChooseShip from './ChooseShip'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import * as shipActions from '../../actions/shipActions'
import * as gameMainActions from '../../actions/gameMainActions'
import PlayerOneAvatar from './avatar/PlayerOneAvatar'
import PlayerTwoAvatar from './avatar/PlayerTwoAvatar'
import PlayerOneSP from './avatar/PlayerOneSP'
import PlayerTwoSP from './avatar/PlayerTwoSP'

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
      console.log('let the games begin!')
    }
  }

  

  render() {
    return (
      <div className="overlay">

        {/* SHOW PLAYER TWO AVATAR */}
        {this.props.game.playerTwo.ship ? <PlayerTwoAvatar image={this.props.game.playerTwo.ship.image}></PlayerTwoAvatar> : <span></span>}
        {/* SHOW PLAYER TWO SHIP POINTS */}
        {this.props.game.playerTwo.ship ? <PlayerTwoSP sp={this.props.game.playerTwo.sp}></PlayerTwoSP> : <span></span>}

        {this.props.ship.chooseShips ? (
          <ChooseShip {...this.props} pickShip={this.pickShip} />
        ) : (
          <TypedIntro allowedToChooseShip={this.allowedToChooseShip} />
        )}

        {/* SHOW PLAYER ONE AVATAR */}
        {this.props.game.playerOne.ship ? <PlayerOneAvatar image={this.props.game.playerOne.ship.image}></PlayerOneAvatar> : <span></span>}
        {/* SHOW PLAYER ONE SHIP POINTS */}
        {this.props.game.playerOne.ship ? <PlayerOneSP sp={this.props.game.playerOne.sp}></PlayerOneSP> : <span></span>}
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
