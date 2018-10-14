import React, { Component } from 'react'
import './Game.css'
import Overlay from './Overlay'

class GameMain extends Component {
  render() {
    const styles = {
      backgroundImage: "url('./img/background.jpg')"
    }

    return (
      <section className="splash-screen" style={styles}>
        <Overlay />
      </section>
    )
  }
}

export default GameMain
