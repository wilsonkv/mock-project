import {
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actionTypes';
import {
  loginSuccess,
  logoutSuccess,
} from './actions';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  data: {},
  loading: false,
  error: '',
};

describe('user actions', () => {
  describe('user login/logout actions', () => {
    it('handles login action creator', () => {
      const action = { type: LOGIN_SUCCESS, user: { name: 'Example' } };

      expect(loginSuccess({ name: 'Example' })).toEqual(action);
    });

    it('handles logoutSuccess action creator', () => {
      const action = { type: LOGOUT };

      expect(logoutSuccess()).toEqual(action);
    });
  });
});
