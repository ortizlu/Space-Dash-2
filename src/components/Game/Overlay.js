import React, { Component } from 'react'
import './Game.css'
import TypedIntro from './TypedIntro'

class Overlay extends Component {
  render() {
    return (
      <div className="overlay">
        <TypedIntro />
      </div>
    )
  }
}

export default Overlay
