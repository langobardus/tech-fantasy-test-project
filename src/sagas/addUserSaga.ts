import { call, put, select } from 'redux-saga/effects'
import axios from 'axios'
import { SagaIterator } from 'redux-saga'
import { fetchUsers } from 'actions'
import { API_USERS } from '../constants'

export function* addUserSaga(): SagaIterator {
  try {
    const selectUserData = yield select(
      (state) => state.usersReducer.selectUserData
    )
    yield call(axios.post, `${API_USERS}users`, selectUserData)
    yield put(fetchUsers())
  } catch (error) {
    console.log('Get Users Error:', error)
  }
}
