import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { SagaIterator } from 'redux-saga'
import { getUsersSuccess } from 'actions'
import { API_USERS } from '../constants'

export function* fetchUsersSaga(): SagaIterator {
  try {
    const { data } = yield call(axios.get, `${API_USERS}users`)
    yield put(getUsersSuccess(data))
  } catch (error) {
    console.log('Get Users Error:', error)
  }
}
