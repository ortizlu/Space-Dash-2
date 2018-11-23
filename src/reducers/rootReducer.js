import ship from './shipReducers'
import game from './gameMainReducer'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
  //this is an array of ships (found in ship reducers)
  ship,
  game
})

export default rootReducer