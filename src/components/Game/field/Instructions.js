import React, {Component} from 'react';
import Typed from 'typed.js'

class Instructions extends Component {
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
      onComplete: cb(this.props.deck.drawingAllowed),
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
    console.log(this.props.message[0])
    if (this.props.message[0] === 'Welcome to the board') {
      this.typedWithCallBack('#typed-instructions', this.props.message, this.props.actions.allowedToDraw)
    //otherwise if the message is new, display it with no callback.
    } else if (this.props.message !== prevProps.message) {
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