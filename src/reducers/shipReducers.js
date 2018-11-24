import { bindActionCreators } from "redux";

const initialShipState = {
  chooseShips: false,
  showShips: false,
  ships: [
    {
      name: 'MR-3',
      image: './img/spaceship1.png'
    },
    {
      name: 'Soyuz 28',
      image: './img/spaceship2.png'
    },
    {
      name: 'Vostok I',
      image: './img/spaceship3.png'
    },
    {
      name: 'Soyuz 30',
      image: './img/spaceship4.png'
    }
  ]
}

export default (state = initialShipState, action) => {
  switch(action.type) {
    case 'REMOVE_SHIP':
    //the action should have a property called ship containing info on which ship to delete.
      return {...state, ships: state.ships.filter(ship => action.shipName !== ship.name)}
    case 'CHOOSE_SHIPS':
      return {...state, chooseShips: action.payload }
    case 'SHOW_SHIPS':
      return {...state, showShips: action.payload}
    default:
      return state
  }
}
