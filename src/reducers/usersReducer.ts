import { ActionTypes } from 'actions'
import { TPost } from 'types'

type InitialStateType = {
  users: TPost[]
}

const usersInit = [] as TPost[]

const initialState: InitialStateType = {
  users: usersInit,
}
export const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'GET_USERS_SUCCEEDED':
      return {
        ...state,
        users: action.users,
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}
