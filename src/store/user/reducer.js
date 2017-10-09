import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../actionTypes';

const initialState = {
  data: {},
  loading: false,
  error: '',
};

function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...initialState, loading: true };
    case LOGIN_SUCCESS:
      return { ...initialState, data: action.user };
    case LOGIN_FAILURE:
      return { ...initialState, error: action.error };
    default:
      return state;
  }
}

export default user;
