//DRAW A CARD
export const draw = (card) => {
  return {
    type: 'DRAW',
    index: 0,
    card: card
  }
}