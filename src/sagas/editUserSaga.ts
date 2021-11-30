import { call, put, select } from 'redux-saga/effects'
import axios from 'axios'
import { SagaIterator } from 'redux-saga'
import { fetchUsers, getUsersSuccess } from 'actions'
import { API_USERS } from '../constants'

export function* editUserSaga(): SagaIterator {
  try {
    const selectUserData = yield select(
      (state) => state.usersReducer.selectUserData
    )
    yield call(
      axios.put,
      `${API_USERS}user/${selectUserData.id}`,
      selectUserData
    )
    yield put(fetchUsers())
  } catch (error) {
    console.log('Get Users Error:', error)
  }
}
