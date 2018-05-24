import {takeEvery, all} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import {
  postUploadSaga
} from './posts';

export function* watchPosts() {
  yield takeEvery(actionTypes.POST_UPLOAD_START, postUploadSaga)
}

export default function* rootSaga() {
  yield all([
    watchPosts()
  ]);
}