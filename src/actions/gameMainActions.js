//MAIN START OF GAME (BUTTON FROM SPLASH)
export const startGame = () => {
  return {
    type: 'GAME_START',
    payload: true
  }
}

//based on who's turn is it, the click on a ship determines who it belongs to.
export const pickShip = (ship) => {
    return {
      type: 'PICK_SHIP',
      pick: ship
    }
}

//CHANGE PLAYER'S TURN
export const changeTurn = () => {
    return {
      type: 'CHANGE_TURN'
    }
}

//CHANGE TO TRUE SO THAT THE FIELD IS DISPLAYED
export const chooseShipsComplete = () => {
  return {
    type: 'CHOOSE_SHIPS_COMPLETE'
  }
}

//CHANGE INSTRUCTIONS TEXT
export const changeInstructions = text => {
  return {
    type: 'CHANGE_INSTRUCTIONS',
    payload: text
  }
}

export const addToHand = card => {
    return {
      type: 'ADD_TO_HAND',
      card: card
    }
}