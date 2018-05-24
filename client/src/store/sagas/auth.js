import {put} from 'redux-saga/effects';

import axios from '../../axios';
import * as actions from '../actions/';

export function* registerSaga(action) {
  yield put(actions.loadingStart());
  try {
    const response = yield axios.post('/api/auth/signup', action.user);
    console.log(response)
    yield put(actions.registerSuccess(response.data));
    yield put(actions.loadingEnd());
  } catch (err) {
    console.log(err)
    yield put(actions.registerFail(err.message));
    yield put(actions.loadingEnd());
  }
}