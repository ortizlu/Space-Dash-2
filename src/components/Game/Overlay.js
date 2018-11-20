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

  canChooseShip = () => {
    this.setState({
      chooseShips: true
    })
  }

  pickShip = (e) => {
    let pick = e.target.name
    let ships = this.state.ships
    for (let i = 0; i < this.state.ships.length; i++) {
      if (this.state.ships[i].name === pick) {
        ships.splice(i, 1)
      }
    }
    this.setState({
      ships: ships
    })
  }

  

  render() {
    return (
      <div className="overlay">
        {this.state.chooseShips ? (
          <ChooseShip pickShip={this.pickShip} ships={this.state.ships} />
        ) : (
          <TypedIntro canChooseShip={this.canChooseShip} />
        )}
      </div>
    )
  }
}

export default Overlay
