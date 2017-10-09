import { push } from 'react-router-redux';
import sessionStorage from 'sessionstorage';

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actionTypes';
import User from './service';

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

export function loginSuccess(user) {
  return { type: LOGIN_SUCCESS, user };
}

export function loginFailure(error) {
  return { type: LOGIN_FAILURE, error };
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

