const gameState = {
  startGame: false
}

export default (state = gameState, action) => {
  switch(action.type) {
    case 'GAME_START':
      return {...state, startGame: action.payload }
    default:
      return state
  }
}
