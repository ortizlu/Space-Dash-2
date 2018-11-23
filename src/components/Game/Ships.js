import React from 'react';

const Ships = (props) => {
  return (
    <div className="ships">
      {props.ships.map((ship, index) => {
          return (
            <button onClick={props.pickShip} className="ships__ship" key={index}>
              <img alt="spaceship" className="ships__ship__image" name={ship.name} src={ship.image} />
            </button>
          )
        })}
    </div>
  );
};

export default Ships;
