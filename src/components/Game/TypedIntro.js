import React, { Component } from 'react'
import './Game.css'
import Typed from 'typed.js'

class TypedIntro extends Component {
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
    this.typed(
      '#typed',
      [
        '',
        'Welcome Space Cadet!',
        // 'The Year is 1960',
        // 'And the space race is on.',
        // 'Countries all over the world are working nonstop to',
        // 'be the first country to get a human in space.',
        // 'Will You be the first?',
        // 'Or will your enemies crush you?',
        ''
      ],
      this.next
    )
  }

  next = () => {
    this.props.allowedToChooseShip()
  }

  componentDidMount() {
    this.gameStory()
  }

  render() {
    return <span id="typed" className="typed-intro" />
  }
}

export default TypedIntro
