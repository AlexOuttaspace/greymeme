import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: null,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        error: '',
        user: action.user
      }
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        error: action.errMessage,
        user: null
      }
    default:
      return state;
  }
}

export default reducer;