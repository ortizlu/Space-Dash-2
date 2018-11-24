export const removeShip = shipName => { 
  return {
    type: "REMOVE_SHIP", 
    shipName: shipName
  }
}

export const chooseShips = () => {
  return {
    type: 'CHOOSE_SHIPS',
    payload: true
  }
}

export const allowPicking = () => {
  return {
    type: 'SHOW_SHIPS',
    payload: true
  }
}