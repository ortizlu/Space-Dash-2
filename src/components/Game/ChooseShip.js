import React, { Component } from 'react'
import Typed from 'typed.js'

class ChooseShip extends Component {
  constructor() {
    super()
    this.state = {
      pick: false,
      ships: ['Apollo 1', 'Falcon', 'Vostok 1', 'Shenzhou']
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

  ChooseShip = () => {
    this.typed('#typed', ['', 'Player 1: Choose your spaceship', ''], this.next)
  }

  next = () => {
    this.setState({
      pick: true
    })
  }

  render() {
    return <div>CHOOSE SHIP</div>
  }
}

export default ChooseShip
