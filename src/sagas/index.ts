import { SagaIterator } from 'redux-saga'
import { takeLatest, all } from 'redux-saga/effects'
import { fetchUsersSaga } from './getUsersSaga'

export function* rootSaga(): SagaIterator {
  yield all([takeLatest('FETCH_USERS', fetchUsersSaga)])
}
