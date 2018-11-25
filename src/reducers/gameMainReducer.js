
const gameState = {
  instructions: [''],
  chooseShipsComplete: false,
  startGame: false,
  turn: false,
  playerOne: {
    ship: '',
    sp: 0,
    hand: []
  },
  playerTwo: {
    ship: '',
    sp: 0,
    hand: []
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
    case 'CHANGE_INSTRUCTIONS':
      return {...state, instructions: action.payload}
    case 'FIRST_FIVE':
      return {
        ...state, [action.player]: {
          ...state[`${action.player}`],
          hand: [...state[`${action.player}`].hand, ...action.cards]
        } 
      }
    case 'ADD_TO_HAND':
    //to add card to player's hand:
    //1. make a copy of state
    //2. make a copy of the player's object
    //3. Target the hand array
    //3. And inside the new array, make a copy of the hand array, then add action.card
      return {...state, [action.player]: {
                ...state[`${action.player}`],
                hand: [...state[`${action.player}`].hand, action.card]
              }
             }
    default:
      return state
  }
}
