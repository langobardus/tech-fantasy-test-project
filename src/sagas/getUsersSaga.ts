import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { SagaIterator } from 'redux-saga'
import { getUsersSuccess } from '../actions'

// const API_USERS_R = 'http://77.120.241.80:8811/api/users'
// const API_USERS = 'https://jsonplaceholder.typicode.com/users'
const API_POSTS = 'https://jsonplaceholder.typicode.com/posts'

export function* fetchUsersSaga(): SagaIterator {
  try {
    const { data } = yield call(axios.get, API_POSTS)
    yield put(getUsersSuccess(data))
  } catch (error) {
    console.log('Get Users Error:', error)
  }
}
