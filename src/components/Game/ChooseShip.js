import React, { Component } from 'react'
import Typed from 'typed.js'
import TypedInstructions from './TypedInstructions'
import './Game.css'
import Ships from './Ships'

// =============================
// WHEN YOU HAVE TIME, NEXT PLAN IS TO ADD THE TYPED WORDS TO STATE IN OVERLAY, SO THAT WHEN INTRO TYPING IS DONE, CHANGE THE CLASS NAME SO THAT THE TEXT IS SMALLER, THEN TYPE (PLAYER 1 CHOOSE SHIP), THEN CHANGE STATE OF CHOOSE SHIP TO TRUE, THEN RENDER THE SHIP PICKING COMPONENT HERE
// =============================

class ChooseShip extends Component {
  constructor() {
    super()
    this.state = {
      pick: false
    }
  }

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

  allowPicking = () => {
    this.setState({
      pick: true
    })
  }

  render() {
    return (
      <div className="choose-ship">
        <TypedInstructions allowPicking={this.allowPicking} />

        {this.state.pick ? <Ships pickShip={this.props.pickShip} ships={this.props.ships} /> : <div />}
      </div>
    )
  }
}

export default ChooseShip
