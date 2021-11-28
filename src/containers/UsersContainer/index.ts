import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { ActionTypes, fetchUsers, setPageCountSelect } from 'actions'
import { AppStateType } from 'reducers'
import { Users } from 'components/App/Users'

const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersReducer.users,
    pageCountSelect: state.paginationReducer.pageCountSelect,
  }
}

type MapDispatchPropsType = {
  getUsersHandler: () => void
  setPageCountSelectHandler: (pageCountSelect: number) => void
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
