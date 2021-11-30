import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import {
  ActionTypes,
  addUser,
  deleteUser,
  editUser,
  fetchUsers,
  setPageCountSelect,
  setSelectUserData,
} from 'actions'
import { AppStateType } from 'reducers'
import { Users } from 'components/App/Users'
import { TUser } from 'types'

const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersReducer.users,
    pageCountSelect: state.paginationReducer.pageCountSelect,
    selectUserData: state.usersReducer.selectUserData,
  }
}

type MapDispatchPropsType = {
  getUsersHandler: () => void
  setPageCountSelectHandler: (pageCountSelect: number) => void
  fetchDeleteUserHandler: () => void
  fetchEditUserHandler: () => void
  fetchAddUserHandler: () => void
  setSelectUserDataHandler: (selectUserData: TUser) => void
}

const mapDispatchToProps = (
  dispatch: Dispatch<ActionTypes>
): MapDispatchPropsType => {
  return {
    getUsersHandler: () => {
      dispatch(fetchUsers())
    },
    setPageCountSelectHandler: (pageCountSelect) => {
      dispatch(setPageCountSelect(pageCountSelect))
    },
    fetchDeleteUserHandler: () => {
      dispatch(deleteUser())
    },
    fetchEditUserHandler: () => {
      dispatch(editUser())
    },
    fetchAddUserHandler: () => {
      dispatch(addUser())
    },
    setSelectUserDataHandler: (selectUserData) => {
      dispatch(setSelectUserData(selectUserData))
    },
  }
}
export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

type TOwnProps = {
  handleShowMap: () => void
}

export type TUsersContainer = ConnectedProps<typeof UsersContainer> & TOwnProps
