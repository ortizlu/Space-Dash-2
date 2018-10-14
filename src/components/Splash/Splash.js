import React, { Component } from 'react'
import './Splash.css'

class Splash extends Component {
  render() {
    const styles = {
      backgroundImage: "url('./img/hero.jpg')"
    }

    return (
      <section className="splash-screen" style={styles}>
        <div className="splash-text">
          <h1>Space Dash</h1>
          <button
            onClick={this.props.startGame}
            id="new-game"
            href="#"
            className="btn"
          >
            New Game
          </button>
        </div>
      </section>
    )
  }
}

export default Splash
