import ship from './shipReducers'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
  //this is an array of ships (found in ship reducers)
  ship
})

export default rootReducer