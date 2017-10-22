import {
  FETCH_ALL_USERS_FAILURE,
  FETCH_ALL_USERS_REQUEST,
  FETCH_ALL_USERS_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actionTypes';

const initialState = {
  data: {},
  users: {},
  loading: false,
  error: '',
};

function user(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_USERS_REQUEST:
      return { ...initialState, data: state.data, loading: true };
    case FETCH_ALL_USERS_SUCCESS:
      return { ...initialState, data: state.data, users: action.users };
    case FETCH_ALL_USERS_FAILURE:
      return { ...initialState, data: state.data, error: action.error };

    case LOGIN_REQUEST:
      return { ...initialState, loading: true };
    case LOGIN_SUCCESS:
      return { ...initialState, data: action.user };
    case LOGIN_FAILURE:
      return { ...initialState, error: action.error };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}

export default user;
