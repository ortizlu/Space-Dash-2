
const gameState = {
  startGame: false,
  turn: false,
  playerOne: {
    ship: ''
  },
  playerTwo: {
    ship: ''
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
    default:
      return state
  }
}
