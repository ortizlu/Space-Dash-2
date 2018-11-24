
const gameState = {
  chooseShipsComplete: false,
  startGame: false,
  turn: false,
  playerOne: {
    ship: '',
    sp: 0
  },
  playerTwo: {
    ship: '',
    sp: 0
  }
}

export default (state = gameState, action) => {
  switch(action.type) {
    case 'GAME_START':
      return {...state, startGame: action.payload }
    case 'PICK_SHIP':
      return {...state, 
              [action.player]: {
                ...state[`${action.player}`],
                ship: action.pick
              }
            }
    case 'CHANGE_TURN':
      return {...state, turn: action.payload}
    case 'CHOOSE_SHIPS_COMPLETE':
      return {...state, chooseShipsComplete: action.payload}
    default:
      return state
  }
}
