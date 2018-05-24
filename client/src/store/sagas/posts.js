import {put} from 'redux-saga/effects';

import axios from '../../axios';
import * as actions from '../actions/';

export function* postUploadSaga(action) {
  yield put(actions.loadingStart());
  try {
    const response = yield axios.post('/api/posts', action.post);
    console.log(response)
    yield put(actions.loadingEnd());
  } catch (err) {
    console.log(err)
    yield put(actions.loadingEnd());
  }
}