import { combineReducers } from 'redux'
import { paginationReducer } from './paginationReducer'
import { usersReducer } from './usersReducer'

export const reducApp = combineReducers({
  usersReducer,
  paginationReducer,
})

export type ReducAppType = typeof reducApp
export type AppStateType = ReturnType<ReducAppType>
