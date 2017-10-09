import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { replace } from 'react-router-redux';
import { connect } from 'react-redux';

import '../assets/stylesheets/Header.scss';

export class Header extends Component {
  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  renderNavButtons() {
    // Logged in links:
    if (this.props.loggedIn) {
      return (
        <div className="header__links">
          <Link className="header__link" to={'/home'}>
            Home
          </Link>
          <Link
            className="header__link"
            to={'/home'}
            onClick={e => this.handleLogout(e)}
          >
            Sign Out
          </Link>
        </div>
      );
    }

    // Logged out links:
    return (
      <div className="header__links">
        <Link className="header__link" to={'/home'}>
          Home
        </Link>
        <Link className="header__link" to={'/login'}>
          Log In
        </Link>
      </div>
    );
  }

  renderLogoLink = () => {
    const { dispatch } = this.props;

    dispatch(replace('/'));
  };

  render() {
    return (
      <div className="header-wrapper">
        <div className="header">
          <div className="header__title">
            <img
              className="logo"
              onClick={this.renderLogoLink}
              role="presentation"
              src={require('../../public/twitter.png')}
            />
          </div>

          {this.renderNavButtons()}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  history: PropTypes.object,
  loggedIn: PropTypes.bool,
  logout: PropTypes.func,
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(withRouter(Header));
