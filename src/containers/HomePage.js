import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontIcon from 'react-md/lib/FontIcons';
import PropTypes from 'prop-types';
import TextField from 'react-md/lib/TextFields';
import Loader from 'react-loader';
import { Card, CardTitle, CardText } from 'react-md';

import { fetchAllUsers } from '../store/user/actions';

import '../assets/stylesheets/HomePage.scss';

const style = { maxWidth: 800 };

export class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  //Similar like pageLoad event
  componentDidMount() {
    this.props.dispatch(fetchAllUsers());
  }

  renderUsers(users) {
    if (!users) {
      return <div id="home-page__null-state">No data available currently!</div>;
    }

    return (
      <div className="list">
        {users.map(user => {
          return (
            <div>
              <Card style={style} className="md-block-centered">
                <CardTitle
                  title={`${user.firstName} ${user.lastName}`}
                  subtitle={`${user.email} | ${user.location}`}
                />
                <CardText>{user.aboutMe}</CardText>
              </Card>
              <br />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="page">
          <Loader color="#fff" loaded={!this.props.loading}>
            <div id="home-page__null-state">
              {this.renderUsers(this.props.users)}
            </div>
          </Loader>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    users: state.user.users,
    loading: state.user.loading,
  };
}

export default connect(mapStateToProps)(HomePage);
