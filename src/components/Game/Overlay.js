import React, { Component } from 'react'
import './Game.css'
import TypedIntro from './TypedIntro'
import ChooseShip from './ChooseShip'

class Overlay extends Component {
  constructor() {
    super()
    this.state = {
      chooseShips: false,
      ships: [
        {
          name: 'MR-3',
          image: './img/spaceship1.png'
        },
        {
          name: 'Soyuz 28',
          image: './img/spaceship2.png'
        },
        {
          name: 'Vostok I',
          image: './img/spaceship3.png'
        },
        {
          name: 'Soyuz 30',
          image: './img/spaceship4.png'
        }
      ]
    }

    this.playerOne = {}

    this.playerTwo = {}
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
          <ChooseShip ships={this.state.ships} />
        ) : (
          <TypedIntro chooseShip={this.chooseShip} />
        )}
      </div>
    )
  }
}

export default Overlay
