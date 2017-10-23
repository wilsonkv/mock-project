import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actionTypes';
import user from './reducer';

describe('items reducer', () => {
  const initialState = {
    data: {},
    users: {},
    loading: false,
    error: '',
  };
  describe('items login/logout reducer', () => {
    it('handles default state', () => {
      expect(user(undefined, {})).toEqual(initialState);
    });

    it('handles LOGIN_REQUEST action', () => {
      const action = { type: LOGIN_REQUEST };
      const expectedState = {
        data: {},
        users: {},
        loading: true,
        error: '',
      };

      expect(user(initialState, action)).toEqual(expectedState);
    });

    it('handles LOGIN_SUCCESS action', () => {
      const action = { type: LOGIN_SUCCESS, user: { name: 'Example' } };
      const expectedState = {
        data: {
          name: 'Example',
        },
        users: {},
        loading: false,
        error: '',
      };

      expect(user(initialState, action)).toEqual(expectedState);
    });

    it('handles LOGIN_FAILURE action', () => {
      const action = { type: LOGIN_FAILURE, error: 'Boom!' };
      const expectedState = {
        data: {},
        users: {},
        loading: false,
        error: 'Boom!',
      };

      expect(user(initialState, action)).toEqual(expectedState);
    });

    it('handles LOGOUT action', () => {
      const action = { type: LOGOUT };
      const expectedState = {
        data: {},
        users: {},
        loading: false,
        error: '',
      };

      expect(user(initialState, action)).toEqual(expectedState);
    });
  });
});
