import { TPost } from 'types'

export type ActionTypes =
  | GetUsersSuccessType
  | FetchUsersType
  | ResetStateActionType
  | SetPageCountSelectType

export type ResetStateActionType = {
  type: 'RESET'
}
export const resetState = (): ResetStateActionType => ({
  type: 'RESET',
})

export type GetUsersSuccessType = {
  type: 'GET_USERS_SUCCEEDED'
  users: TPost[]
}
export const getUsersSuccess = (users: TPost[]): GetUsersSuccessType => ({
  type: 'GET_USERS_SUCCEEDED',
  users,
})

export type FetchUsersType = {
  type: 'FETCH_USERS'
}
export const fetchUsers = (): FetchUsersType => ({
  type: 'FETCH_USERS',
})

export type SetPageCountSelectType = {
  type: 'SET_PAGE_COUNT_SELECT'
  pageCountSelect: number
}
export const setPageCountSelect = (
  pageCountSelect: number
): SetPageCountSelectType => ({
  type: 'SET_PAGE_COUNT_SELECT',
  pageCountSelect,
})
