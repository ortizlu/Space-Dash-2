const deck = {
  drawingAllowed: false,
  firstFiveOne: [],
  firstFiveTwo: [],
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


// USING FISHER-YATES MODEL FOR SHUFFLING
for (let aCard = deck.cardDeck.length - 1; aCard > 0; aCard--) {
  let randomCard = Math.floor(Math.random() * (aCard + 1))
    ;[deck.cardDeck[aCard], deck.cardDeck[randomCard]] = [deck.cardDeck[randomCard], deck.cardDeck[aCard]]
}

//add First Five to properties before setting state
for (let i = 0; i < 5; i++) {
  let card = deck.cardDeck.shift()
  deck.firstFiveOne.push(card)
}

for (let i = 0; i < 5; i++) {
  let card = deck.cardDeck.shift()
  deck.firstFiveTwo.push(card)
}


export default (state = deck, action) => {
  switch(action.type) {
    case 'DRAW':
      //remove top card from deck
      return {...state, cardDeck: [...state.cardDeck.slice(0, action.index), ...state.cardDeck.slice(action.index + 1)]}
    case 'ALLOWED_TO_DRAW':
      return {
        ...state, drawingAllowed: !state.drawingAllowed 
      }
    default:
      return state
  }
}
