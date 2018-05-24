import {takeEvery, takeLatest, all} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import {
  postUploadSaga
} from './posts';

import {
  registerSaga
} from './auth'

export function* watchPosts() {
  yield takeEvery(actionTypes.POST_UPLOAD_START, postUploadSaga);
}

export function* watchAuth() {
  yield takeLatest(actionTypes.REGISTER_START, registerSaga)
}


export default function* rootSaga() {
  yield all([
    watchPosts(),
    watchAuth()
  ]);
}