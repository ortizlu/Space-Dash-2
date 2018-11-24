import React, { Component } from 'react'
import './Game.css'

class PickInstructions extends Component {

  componentDidMount() {
    this.props.actions.allowPicking()
  }

  render() {
    return <span id="typed" className="pick-instructions">Player {this.props.game.turn ? '2' : '1'}: Pick Your Ship</span>
  }
}

export default PickInstructions
