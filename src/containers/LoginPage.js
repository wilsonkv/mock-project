import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';

import { login } from '../store/user/actions';
import '../assets/stylesheets/LoginPage.scss';

export class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.formValid = this.formValid.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.dispatch(login(email, password));
    this.setState({ email: '', password: '' });
  }

  formValid() {
    const { email, password } = this.state;

    return email.length > 0 && password.length > 0;
  }

  renderError() {
    if (this.props.error) {
      return <div className="error">{this.props.error}</div>;
    }
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="page">
          <Card className="card login">
            <CardTitle title="Log in" />
            <CardText>
              {this.renderError()}
              <TextField
                id="email"
                label="Email"
                onChange={email => this.setState({ email })}
                placeholder="you@example.com"
                type="email"
                value={this.state.email}
              />
              <TextField
                id="password"
                label="Password"
                onChange={password => this.setState({ password })}
                placeholder="••••••••••••"
                type="password"
                value={this.state.password}
              />
              <div className="login__submit">
                <Button
                  disabled={!this.formValid()}
                  label="Log In"
                  onClick={this.onSubmit}
                  raised
                  primary
                  type="submit"
                />
              </div>
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    error: state.user.error,
  };
}

export default connect(mapStateToProps)(LoginPage);
