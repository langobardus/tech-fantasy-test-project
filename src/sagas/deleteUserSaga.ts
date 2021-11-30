import { call, put, select } from 'redux-saga/effects'
import axios from 'axios'
import { SagaIterator } from 'redux-saga'
import { fetchUsers } from 'actions'
import { API_USERS } from '../constants'

export function* deleteUserSaga(): SagaIterator {
  try {
    const id = yield select((state) => state.usersReducer.selectUserData.id)
    yield call(axios.delete, `${API_USERS}user/${id}`)
    yield put(fetchUsers())
  } catch (error) {
    console.log('Get Users Error:', error)
  }
}
