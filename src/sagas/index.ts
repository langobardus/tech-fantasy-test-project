import { ADD_USER, DELETE_USER, EDIT_USER, FETCH_USERS } from 'actions'
import { SagaIterator } from 'redux-saga'
import { takeLatest, all } from 'redux-saga/effects'
import { addUserSaga } from './addUserSaga'
import { deleteUserSaga } from './deleteUserSaga'
import { editUserSaga } from './editUserSaga'
import { fetchUsersSaga } from './getUsersSaga'

export function* rootSaga(): SagaIterator {
  yield all([
    takeLatest(FETCH_USERS, fetchUsersSaga),
    takeLatest(DELETE_USER, deleteUserSaga),
    takeLatest(EDIT_USER, editUserSaga),
    takeLatest(ADD_USER, addUserSaga),
  ])
}
