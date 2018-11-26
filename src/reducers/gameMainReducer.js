
const gameState = {
  instructions: [''],
  chooseShipsComplete: false,
  startGame: false,
  turn: false,
  playerOne: {
    cardStaged: {},
    ship: '',
    sp: 0,
    showCards: false,
    hand: []
  },
  playerTwo: {
    cardStaged: {},
    ship: '',
    sp: 0,
    showCards: false,
    hand: []
  }
}

export default (state = gameState, action) => {
  switch(action.type) {
    case 'GAME_START':
      return {...state, startGame: action.payload }
    case 'PICK_SHIP':
      if (!state.turn) {
        return {
          ...state, playerOne: {
          ...state.playerOne,
          ship: action.pick
        }
      }
      } else {
        return {
          ...state, playerTwo: {
          ...state.playerTwo,
          ship: action.pick
        }
      }
      }
    case 'CHANGE_TURN':
      return {...state, turn: !state.turn}
    case 'CHOOSE_SHIPS_COMPLETE':
      return {...state, chooseShipsComplete: !state.chooseShipsComplete}
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
      if (!state.turn) {
        return {
          ...state, playerOne: {
          ...state.playerOne,
          hand: [...state.playerOne.hand, action.card]
        }
      }
      } else {
        return {
          ...state, playerTwo: {
          ...state.playerTwo,
          hand: [...state.playerTwo.hand, action.card]
        }
      }
      }
    case 'SHOW_CARDS':
      if (!state.turn) {
        return {
          ...state, playerOne: {
            ...state.playerOne,
            showCards: !state.playerOne.showCards
          }
        }
      } else {
        return {
          ...state, playerTwo: {
            ...state.playerTwo,
            showCards: !state.playerTwo.showCards
          }
        }
      }
    case 'CARD_STAGED':
    if (!state.turn) {
      return {
        ...state, playerOne: {
          ...state.playerOne,
          cardStaged: action.card
        }
      }
    } else {
      return {
        ...state, playerTwo: {
          ...state.playerTwo,
          cardStaged: action.card
        }
      }
    }
    default:
      return state
  }
}
