import { combineReducers } from '@reduxjs/toolkit'
import { userReducers } from '../user'

export const rootReducer = combineReducers({
  user: userReducers,
})
