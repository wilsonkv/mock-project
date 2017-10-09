import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

//import dataSources from './dataSources/reducer';
import user from './user/reducer';

const root = combineReducers({
 // dataSources,
  router: routerReducer,
  user,
});

export default root;
