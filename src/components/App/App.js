import React, { Component } from 'react'
import './App.css'
import Splash from '../Splash/Splash'
import Clouds from '../Game/Clouds'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as gameMainActions from '../../actions/gameMainActions'

class App extends Component {

  startGame = e => {
    e.preventDefault()
    this.props.actions.startGame()
  }

  render() {
    return (
      <div className="App">
        <main>
          {this.props.game.startGame ? (
            <Clouds />
          ) : (
            <Splash startGame={this.startGame} />
          )}
        </main>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    game: state.game
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameMainActions, dispatch)
  }
}

const connection = connect(mapStateToProps, mapDispatchToProps)

const wrappedComponent = connection(App)

export default wrappedComponent
