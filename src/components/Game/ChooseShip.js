import React, { Component } from 'react'
import Typed from 'typed.js'
import TypedInstructions from './TypedInstructions'
import './Game.css'
import Ships from './Ships'

class ChooseShip extends Component {

  // =============================
  // TYPED.JS
  // =============================
  typed = (elem, arr, callback) => {
    let options = {
      typeSpeed: 10,
      strings: arr,
      showCursor: false,
      onComplete: callback,
      backDelay: 1000,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 1500
    }

    let typed = new Typed(elem, options)
  }

  // this gets passed into the TypedInstructions component so that after the message is typed ('Player X: Choose your spaceship'), picking is allowed and the Ships can be rendered
  allowPicking = () => {
    this.props.actions.allowPicking()
  }

  render() {
    return (
      <div className="choose-ship">
        <TypedInstructions allowPicking={this.allowPicking} />

        {this.props.ship.showShips ? <Ships pickShip={this.props.pickShip} ships={this.props.ship.ships} /> : <div />}
      </div>
    )
  }
}

export default ChooseShip
