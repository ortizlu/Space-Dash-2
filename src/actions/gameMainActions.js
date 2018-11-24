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

export const chooseShipsComplete = () => {
  return {
    type: 'CHOOSE_SHIPS_COMPLETE',
    payload: true
  }
}