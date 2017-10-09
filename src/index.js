import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// react-md utilizes Google's material icons
import WebFont from 'webfontloader';
WebFont.load({ google: { families: ['Hind:300, 700', 'Material Icons'] } });

import App from './containers/App';
import configureStore from './store/configureStore';
import { getMe } from './store/user/actions';

import './assets/stylesheets/index.scss';

// the same history instance is required in the store and ConnectedRouter
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
const store = configureStore(history);

//sessionStorage gets cleared when the page session ends.   
//A page session lasts for as long as the browser is open and survives over page reloads and restores. 
if (sessionStorage.getItem('jwt')) {
  const jwt = sessionStorage.getItem('jwt');
  store.dispatch(getMe(jwt));
}

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
}

render(App);

// In development, hot module replacement (HMR) updates the application
// when changes are made, without having to refresh.
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(NextApp);
  });
}
