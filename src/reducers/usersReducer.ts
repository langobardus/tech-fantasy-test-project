import {
  ActionTypes,
  GET_USERS_SUCCEEDED,
  RESET,
  SET_SELECT_USER_DATA,
} from 'actions'
import { TUser } from 'types'

type InitialStateType = {
  users: TUser[]
  selectUserData: TUser
}

const usersInit = [] as TUser[]

const initialState: InitialStateType = {
  users: usersInit,
  selectUserData: {
    name: '',
    surname: '',
    desc: '',
  },
}
export const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case GET_USERS_SUCCEEDED:
      return {
        ...state,
        users: action.users,
      }
    case SET_SELECT_USER_DATA:
      return {
        ...state,
        selectUserData: action.selectUserData,
      }
    case RESET:
      return initialState
    default:
      return state
  }
}
