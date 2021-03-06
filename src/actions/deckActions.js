//add first five to hand
export const firstFive = (player, arr) => {
  return {
    type: 'FIRST_FIVE',
    cards: arr,
    player: player
  }
}

//DRAW A CARD
export const draw = card => {
  return {
    type: 'DRAW',
    index: 0,
    card: card
  }
}

export const allowedToDraw = () => {
    return {
      type: 'ALLOWED_TO_DRAW'
    }
}

export const drawingAnimations = () => {
  return {
    type: 'DRAWING_ANIMATIONS'
  }
}