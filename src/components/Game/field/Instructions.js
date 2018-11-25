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
      fadeOut: false
    }

    let typed = new Typed(elem, options)
  }

  componentDidMount() {
    this.typed('#typed-instructions', this.props.message)
  }

  componentDidUpdate(prevProps) {
    if (this.props.message !== prevProps.message) {
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