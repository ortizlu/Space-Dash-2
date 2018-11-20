import { REMOVE_SHIP } from "../constants/action-types";

const initialState = {
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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_SHIP:
      return state.slice(0, action.index).concat(state.slice(action.index + 1))
    default:
      return state
  }
}

export default rootReducer