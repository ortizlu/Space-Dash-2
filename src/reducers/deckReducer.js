const deck = {
  cardDrawn: '',
  cardDeck:[]
}

for (let i = 0; i < 5; i++) {
  deck.cardDeck.push({
    type: 'att',
    pt: 1
  })
}

for (let i = 0; i < 5; i++) {
  deck.cardDeck.push({
    type: 'att',
    pt: 1 // should be two eventually
  })
}

for (let i = 0; i < 7; i++) {
  deck.cardDeck.push({
    type: 'def',
    pt: 1
  })
}

for (let i = 0; i < 5; i++) {
  deck.cardDeck.push({
    type: 'def',
    pt: 1 // should be two eventually
  })
}

for (let i = 0; i < 15; i++) {
  deck.cardDeck.push({
    type: 'sp',
    pt: 1
  })
}

for (let i = 0; i < 5; i++) {
  deck.cardDeck.push({
    type: 'sp',
    pt: 1 // should be two eventually
  })
}



export default (state = deck, action) => {
  switch(action.type) {
    case 'DRAW':
      return {...state, cardDrawn: action.card, cardDeck: [...state.cardDeck.slice(0, action.index), ...state.cardDeck.slice(action.index + 1)]}
    default:
      return state
  }
}
