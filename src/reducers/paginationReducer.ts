import { ActionTypes, RESET } from 'actions'

type InitialStateType = {
  pageCountSelect: number
}

const initialState: InitialStateType = {
  pageCountSelect: 0,
}
export const paginationReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'SET_PAGE_COUNT_SELECT':
      return {
        ...state,
        pageCountSelect: action.pageCountSelect,
      }
    case RESET:
      return initialState
    default:
      return state
  }
}
