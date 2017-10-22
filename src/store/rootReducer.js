import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import location from './location/reducer';
import user from './user/reducer';

const root = combineReducers({
  router: routerReducer,
  user,
  location,
});

export default root;
