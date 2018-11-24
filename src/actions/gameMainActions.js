//MAIN START OF GAME (BUTTON FROM SPLASH)
export const startGame = () => {
  return {
    type: 'GAME_START',
    payload: true
  }
}

//based on who's turn is it, the click on a ship determines who it belongs to.
export const pickShip = (turn, ship) => {
  if (!turn) {
    return {
      type: 'PICK_SHIP',
      player: 'playerOne',
      pick: ship
    }
  } else {
    return {
      type: 'PICK_SHIP',
      player: 'playerTwo',
      pick: ship
    }
  }
}

//CHANGE PLAYER'S TURN
export const changeTurn = turn => {
  if (!turn) {
    return {
      type: 'CHANGE_TURN',
      payload: true
    }
  } else {
    return {
      type: 'CHANGE_TURN',
      paylod: false
    }
  }
}

//CHANGE TO TRUE SO THAT THE FIELD IS DISPLAYED
export const chooseShipsComplete = () => {
  return {
    type: 'CHOOSE_SHIPS_COMPLETE',
    payload: true
  }
}

//CHANGE INSTRUCTIONS TEXT
export const changeInstructions = (text) => {
  return {
    type: 'CHANGE_INSTRUCTIONS',
    payload: text
  }
}

export const addToHand = (turn, card) => {
  if (!turn) {
    return {
      type: 'ADD_TO_HAND',
      card: card
    }
  } else {
    return {
      type: 'ADD_TO_HAND',
      card: card
    }
  }
}