import React from 'react';
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {articles: state.articles }
}

const Ships = ({ships}) => {
  return (
    <div className="ships">
      {ships.map((ship, index) => {
          return (
            <button className="ships__ship" key={index}>
              <img alt="spaceship" className="ships__ship__image" name={ship.name} src={ship.image} />
            </button>
          )
        })}
    </div>
  );
};

export default Ships;

