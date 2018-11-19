import React, { Component } from 'react'

class Ships extends Component {
  render() {
    return (
      <div className="ships">
        {this.props.ships.map((ship, index) => {
          return (
            <button className="ships__ship" key={index}>
              <img alt="spaceship" className="ships__ship__image" name={ship.name} src={ship.image} />
            </button>
          )
        })}
      </div>
    )
  }
}

export default Ships
