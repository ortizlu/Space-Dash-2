import React, {Component} from 'react';
import Typed from 'typed.js'

class Instructions extends Component {
  state = {
    typedInstructionsCalled: false,
    drawInstructionsCalled: false
  }

  // =============================
  // TYPED.JS
  // =============================
  typed = (elem, arr) => {
    let options = {
      typeSpeed: 15,
      strings: arr,
      showCursor: false,
      fadeOut: false,
      backDelay: 1000
    }

    let typed = new Typed(elem, options)
  }

  typedWithCallBack = (elem, arr, cb) => {
    let options = {
      typeSpeed: 15,
      strings: arr,
      onComplete: cb,
      showCursor: false,
      fadeOut: false,
      backDelay: 1000
    }

    let typedWithCallBack = new Typed(elem, options)
  }

  componentDidMount() {
    this.typed('#typed-instructions', this.props.message)
  }

  componentDidUpdate(prevProps) {
    //if the message coming in is the instructions of the layout of the field, start typed.js but with a callback, that allows a player to draw AFTER the message has been typed to avoid bugs.
    if (this.props.message[1] === 'Welcome to the board') {
      //this single state lives inside instructions because componentDidUpdate gets called more than once for some reason, so to prevent loops with typed.js, a conditional is applied so that the typedWithCallBack method only gets called once
      if (!this.state.typedInstructionsCalled) {
        this.typedWithCallBack('#typed-instructions', this.props.message, this.props.actions.allowedToDraw)
        this.setState({typedInstructionsCalled: true})
      }
    //if drawing instructions are coming, use a callback so that player doesn't try to play anything while typed is still typing  
    } else if (this.props.message[1] === 'Make your move.') {
      if (!this.state.drawInstructionsCalled) {
        this.typedWithCallBack('#typed-instructions', this.props.message, this.props.actions.showCards)
        this.setState({drawInstructionsCalled: true})
      }
    } 
    //otherwise if the message is new, display it with no callback.
    else if (this.props.message !== prevProps.message) {
      this.typed('#typed-instructions', this.props.message)
    }
  }

  render() {
      return (
        <p id="typed-instructions" className="typed-instructions"></p>
      );
  }
}

export default Instructions;