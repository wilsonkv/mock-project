import {
  LOCATION_FAILURE,
  LOCATION_REQUEST,
  LOCATION_SUCCESS,
} from '../actionTypes';

const initialState = {
  locations: [],
  loading: false,
};

function location(state = initialState, action) {
  switch (action.type) {
    case LOCATION_REQUEST:
      return { ...initialState, loading: true };
    case LOCATION_SUCCESS:
      return { ...initialState, locations: action.locations };
    case LOCATION_FAILURE:
      return { ...initialState, error: action.error };
    default:
      return state;
  }
}

export default location;
