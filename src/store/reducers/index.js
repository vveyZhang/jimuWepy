import { combineReducers } from 'redux'
import counter from './counter'
import course from './course'
import global from './global'
export default combineReducers({
  counter,
  course,
  global
})