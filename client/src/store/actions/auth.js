import * as actionTypes from './actionTypes';


export const registerStart = (user) => ({
  type: actionTypes.REGISTER_START,
  user
});

export const registerSuccess = (user) => ({
  type: actionTypes.REGISTER_SUCCESS,
  user
});

export const registerFail = (errMessage) => ({
  type: actionTypes.REGISTER_SUCCESS,
  errMessage
});