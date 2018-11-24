import React, { Component } from 'react'
import './Game.css'
import TypedIntro from './TypedIntro'
import ChooseShip from './ChooseShip'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import * as shipActions from '../../actions/shipActions'

class Overlay extends Component {


  allowedToChooseShip = () => {
    this.props.actions.chooseShips()
  }

  pickShip = (e) => {
    console.log(e.target.name)
    let pick = e.target.name
    this.props.actions.removeShip(pick)
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
    ship: state.ship
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(shipActions, dispatch)
  }
}

const connection = connect(mapStateToProps, mapDispatchToProps)

const wrappedComponent = connection(Overlay)

export default wrappedComponent
