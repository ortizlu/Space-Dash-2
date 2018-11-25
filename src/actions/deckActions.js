//DRAW A CARD
export const draw = (card) => {
  return {
    type: 'DRAW',
    index: 0,
    card: card
  }
}

export const allowedToDraw = (bool) => {
    return {
      type: 'ALLOWED_TO_DRAW',
      payload: !bool
    }
}