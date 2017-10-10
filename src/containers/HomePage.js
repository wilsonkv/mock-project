import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontIcon from 'react-md/lib/FontIcons';
import PropTypes from 'prop-types';
import TextField from 'react-md/lib/TextFields';

import '../assets/stylesheets/HomePage.scss';

export class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  //Similar like pageLoad event
  componentDidMount() {}

  render() {
    return (
      <div className="page-wrapper">
        <div className="page">
          <h2>Welcome to sample React App!</h2>
          <div id="home-page__null-state" />
        </div>
        <div>Content added by Asa</div>
        <div>Content added by Alvin</div>
        <div>Content added by Radeep</div>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dataSources: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    // dataSources: state.dataSources.list,
  };
}

export default connect(mapStateToProps)(HomePage);
