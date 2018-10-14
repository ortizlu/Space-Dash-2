import React, { Component } from 'react'
import './Game.css'
import TypedIntro from './TypedIntro'
import ChooseShip from './ChooseShip'

class Overlay extends Component {
  constructor() {
    super()
    this.state = {
      chooseShips: false
    }
  }

  chooseShip = () => {
    this.setState({
      chooseShips: true
    })
  }

  render() {
    return (
      <div className="overlay">
        {this.state.chooseShips ? (
          <ChooseShip />
        ) : (
          <TypedIntro chooseShip={this.chooseShip} />
        )}
      </div>
    )
  }
}

export default Overlay
