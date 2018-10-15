import React, { Component } from 'react'

class Ships extends Component {
  render() {
    return (
      <div>
        {this.props.ships.map(ship => {
          return (
            <a href="#">
              <img className="spaceship" name={ship.name} src={ship.image} />
            </a>
          )
        })}
      </div>
    )
  }
}

export default Ships
