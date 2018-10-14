import React, { Component } from 'react'
import './App.css'
import Splash from '../Splash/Splash'
import GameMain from '../Game/GameMain'

class App extends Component {
  constructor() {
    super()
    this.state = {
      startGame: false
    }
  }
  startGame = e => {
    e.preventDefault()
    this.setState({
      startGame: true
    })
  }

  render() {
    return (
      <div className="App">
        <main>
          {this.state.startGame ? (
            <GameMain />
          ) : (
            <Splash startGame={this.startGame} />
          )}
        </main>
      </div>
    )
  }
}

export default App
