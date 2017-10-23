import { push } from 'react-router-redux';
import sessionStorage from 'sessionstorage';

import {
  FETCH_ALL_USERS_FAILURE,
  FETCH_ALL_USERS_REQUEST,
  FETCH_ALL_USERS_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from '../actionTypes';
import User from './service';

export function fetchAllUsers(searchText) {
  return async dispatch => {
    dispatch(fetchAllUsersRequest());
    const response = await User.get(searchText);

    if (Array.isArray(response)) {
      return dispatch(fetchAllUsersSuccess(response));
    }

    // TODO: ensure consistent error messages
    if (response.error) {
      return dispatch(fetchAllUsersFailure(response.error));
    } else if (response.errorMessage) {
      return dispatch(fetchAllUsersFailure(response.errorMessage));
    } else {
      return dispatch(fetchAllUsersFailure('An error has occurred.'));
    }
  };
}
export function fetchAllUsersFailure(error) {
  return { type: FETCH_ALL_USERS_FAILURE, error };
}
export function fetchAllUsersRequest() {
  return { type: FETCH_ALL_USERS_REQUEST };
}
export function fetchAllUsersSuccess(users) {
  return { type: FETCH_ALL_USERS_SUCCESS, users };
}

export function getMe(jwt) {
  return async dispatch => {
    const response = await User.getMe(jwt);

    if (response.error || response.errorMessage) {
      console.log('Token exists, but login failed!');
      return;
    }

    dispatch(loginSuccess(response));
  };
}

export function login(email, password) {
  return async dispatch => {
    const response = await User.login(email, password);

    if (response.error) {
      return dispatch(loginFailure(response.error));
    }

    sessionStorage.setItem('jwt', response.jwt);
    const nextNav = sessionStorage.getItem('nextNav');
    if (nextNav) {
      sessionStorage.removeItem('nextNav');
      dispatch(push(nextNav));
    } else {
      dispatch(push('/'));
    }
    dispatch(loginSuccess(response.user));
  };
}

export function loginFailure(error) {
  return { type: LOGIN_FAILURE, error };
}
export function loginSuccess(user) {
  return { type: LOGIN_SUCCESS, user };
}

export function logout() {
  return dispatch => {
    sessionStorage.removeItem('jwt');
    dispatch(logoutSuccess());
    dispatch(push('/login'));
  };
}
export function logoutSuccess() {
  return { type: LOGOUT };
}

export function updateProfile(user) {
  return async dispatch => {
    dispatch(updateProfileRequest());
    const response = await User.patch(user);

    if (response) {
      return dispatch(updateProfileSuccess(response));
    }

    // TODO: ensure consistent error messages
    if (response.error) {
      return dispatch(updateProfileFailure(response.error));
    } else if (response.errorMessage) {
      return dispatch(updateProfileFailure(response.errorMessage));
    } else {
      return dispatch(updateProfileFailure('An error has occurred.'));
    }
  };
}
export function updateProfileFailure(error) {
  return { type: UPDATE_PROFILE_FAILURE, error };
}
export function updateProfileRequest() {
  return { type: UPDATE_PROFILE_REQUEST };
}
export function updateProfileSuccess(user) {
  return { type: UPDATE_PROFILE_SUCCESS, user };
}
