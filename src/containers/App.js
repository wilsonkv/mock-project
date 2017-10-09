import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router';
import isEmpty from 'lodash/isEmpty';

import Header from '../components/Header';
import LoginPage from '../containers/LoginPage';
import HomePage from '../containers/HomePage';
import { logout } from '../store/user/actions';

import '../assets/stylesheets/App.scss';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header
        loggedIn={!isEmpty(this.props.user)}
        logout={() => this.props.dispatch(logout())}
        />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.user.data,
  };
}

export default withRouter(connect(mapStateToProps)(App));
