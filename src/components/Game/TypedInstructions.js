import React, { Component } from 'react'
import Typed from 'typed.js'
import './Game.css'

class TypedInstructions extends Component {
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

  gameStory = () => {
    this.typed('#typed', ['Player 1: Choose your spaceship'], this.next)
  }

  next = () => {
    this.props.allowPicking()
  }

  componentDidMount() {
    this.gameStory()
  }

  render() {
    return <span id="typed" className="typed-instructions" />
  }
}

export default TypedInstructions
