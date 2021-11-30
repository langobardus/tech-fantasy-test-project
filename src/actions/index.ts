import { TUser } from 'types'

export type ActionTypes =
  | TGetUsersSuccess
  | TFetchUsers
  | TResetStateAction
  | TSetPageCountSelect
  | TDeleteUser
  | TSetSelectUserData
  | TEditUser
  | TAddUser

export const RESET = 'RESET'
export type TResetStateAction = {
  type: typeof RESET
}
export const resetState = (): TResetStateAction => ({
  type: RESET,
})

export const GET_USERS_SUCCEEDED = 'GET_USERS_SUCCEEDED'
export type TGetUsersSuccess = {
  type: typeof GET_USERS_SUCCEEDED
  users: TUser[]
}
export const getUsersSuccess = (users: TUser[]): TGetUsersSuccess => ({
  type: GET_USERS_SUCCEEDED,
  users,
})

export const FETCH_USERS = 'FETCH_USERS'
export type TFetchUsers = {
  type: typeof FETCH_USERS
}
export const fetchUsers = (): TFetchUsers => ({
  type: FETCH_USERS,
})

export const DELETE_USER = 'DELETE_USER'
export type TDeleteUser = {
  type: typeof DELETE_USER
}
export const deleteUser = (): TDeleteUser => ({
  type: DELETE_USER,
})

export const EDIT_USER = 'EDIT_USER'
export type TEditUser = {
  type: typeof EDIT_USER
}
export const editUser = (): TEditUser => ({
  type: EDIT_USER,
})

export const ADD_USER = 'ADD_USER'
export type TAddUser = {
  type: typeof ADD_USER
}
export const addUser = (): TAddUser => ({
  type: ADD_USER,
})

export const SET_PAGE_COUNT_SELECT = 'SET_PAGE_COUNT_SELECT'

export type TSetPageCountSelect = {
  type: typeof SET_PAGE_COUNT_SELECT
  pageCountSelect: number
}
export const setPageCountSelect = (
  pageCountSelect: number
): TSetPageCountSelect => ({
  type: SET_PAGE_COUNT_SELECT,
  pageCountSelect,
})

export const SET_SELECT_USER_DATA = 'SET_SELECT_USER_DATA'
export type TSetSelectUserData = {
  type: typeof SET_SELECT_USER_DATA
  selectUserData: TUser
}
export const setSelectUserData = (
  selectUserData: TUser
): TSetSelectUserData => ({
  type: SET_SELECT_USER_DATA,
  selectUserData,
})
