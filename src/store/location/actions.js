import {
  LOCATION_FAILURE,
  LOCATION_REQUEST,
  LOCATION_SUCCESS,
} from '../actionTypes';
import Location from './service';

export function fetchLocations() {
  return async dispatch => {
    dispatch(fetchLocationsRequest());
    const response = await Location.get();

    if (Array.isArray(response)) {
      return dispatch(fetchLocationsSuccess(response));
    }

    // TODO: ensure consistent error messages
    if (response.error) {
      return dispatch(fetchLocationsFailure(response.error));
    } else if (response.errorMessage) {
      return dispatch(fetchLocationsFailure(response.errorMessage));
    } else {
      return dispatch(fetchLocationsFailure('An error has occurred.'));
    }
  };
}
export function fetchLocationsFailure(error) {
  return { type: LOCATION_FAILURE, error };
}
export function fetchLocationsRequest() {
  return { type: LOCATION_REQUEST };
}
export function fetchLocationsSuccess(locations) {
  return { type: LOCATION_SUCCESS, locations };
}
