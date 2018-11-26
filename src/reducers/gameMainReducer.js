
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
    case 'ACTIVATE_CARD':
      let player
      let opponent
      let activeCard

      //check whos player and whos opponent
      if (!state.turn) {
        player = 'playerOne'
        opponent = 'playerTwo'
      } else {
        player = 'playerTwo'
        opponent = 'playerOne'
      }

      //set active card
      activeCard = state[`${player}`].cardStaged

      //==============ATT==============================
      if (activeCard.cardType === 'att') {
        //if 0, show message that player attacked but opponent did not have any points
      if (state[`${opponent}`].sp === 0) {
        
        return {
          ...state,
          //tell player he attacked in vain 
          instructions: [' ', 'player attacked but opponent did not have any points'],
          //remove staged card
          [`${player}`]: {
            ...state[`${player}`], cardStaged: {}
          }
        }
        //else if opponent sp - att pt < 0, set opponent points to 0
      } else if (state[`${opponent}`].sp - activeCard.cardPt <= 0) {
        return {
          //remove staged card
          ...state, instructions: [" ", "Opponent's points are back to 0"], [`${player}`]: {
            ...state[`${player}`], cardStaged: {}
          },
          //set opponent's points to 0
          [`${opponent}`]: {
            ...state[`${opponent}`],
            sp: 0
          }
        }
      } else {
        return {
          ...state, 
          //opponent succesfully attacked
          instructions: [" ","Opponent's was attacked!"],
          //remove staged card
          [`${player}`]: {
            ...state[`${player}`], cardStaged: {}
          },
          //set opponent's SP to be SP - activeCard attack points
          [`${opponent}`]: {
            ...state[`${opponent}`],
            sp: state[`${opponent}`].sp - activeCard.cardPt
          }
        }
      }
      //==============END ATT==============================

      //==============DEF==============================
    } else if (activeCard.cardType === 'def') {
      return {
        ...state, instructions: ['', 'You can only use that card when opponent attacks.']
      }
      //==============END DEF==============================

      //==============SP==============================
    } else if (activeCard.cardType === 'sp') {
        //this log will be deleted to maitain purity
        if (state[`${player}`].sp + activeCard.cardPt >= 3) {
          console.log(`${player} Wins the game!`)
        }

        return {
          ...state, 
          //points added
          instructions: ['Points succesfully added'],
          //add points
          [`${player}`]: {
            ...state[`${player}`], sp: state[`${player}`].sp + activeCard.cardPt, 
            //remove staged card
            cardStaged: {}
          }
        }
      //==============END SP==============================
    }
    default:
      return state
  }
}
