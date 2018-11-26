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

export const showCards = () => {
  return {
    type: 'SHOW_CARDS'
  }
}

export const cardStaged = (cardType, cardPt, cardIndex) => {
  let card = {
    cardType,
    cardPt,
    cardIndex
  }
  return {
    type: 'CARD_STAGED',
    card
  }
}

export const activateCard = () => {
  return {type: 'ACTIVATE_CARD'}
}


//take card that's staged
//based on whos turn is it, evaluate what card is it

//ATT:
//remove it from person's hand
//add it to the graveyard (make a graveyard array)
//show graveyard animation

//else make opponent sp = opponent sp - att pt
//remove staged card. 

//SP:
//remove it from person's hand
//add it to the graveyard (make a graveyard array)
//show graveyard animation
//if card is sp, add pt to player's sp
//check player's sp if it is greater or equal to 3
//if so, display message that player won.
//else remove staged card


//DEF:
//if card is def, inform the player that they can't use it until opponent attacks.
//remove card from staged