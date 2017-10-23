import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';
import Loader from 'react-loader';
import SelectField from 'react-md/lib/SelectFields';

import { fetchLocations } from '../store/location/actions';
//import { updateProfile } from '../store/user/actions';
//import '../assets/stylesheets/SignUpPage.scss';

export class EditProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.userData;

    this.onSubmit = this.onSubmit.bind(this);
    this.formValid = this.formValid.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchLocations());
  }

  onSubmit(e) {
    e.preventDefault();
    //this.props.dispatch(updateProfile(this.state));
  }

  formValid() {
    const {
      id,
      firstName,
      lastName,
      nickName,
      locationId,
      email,
      manager,
      role,
      aboutMe,
    } = this.state;

    return (
      // firstName.length > 0 &&
      // lastName.length > 0 &&
      // locationId > 0 &&
      // email.length > 0 &&
      // manager.length > 0 &&
      // role.length > 0 &&
      // aboutMe.length > 0 &&
      /^\S+@\S+\.\S+$/.test(email)
    );
  }

  renderError() {
    if (this.props.updateProfileError || this.props.locationsError) {
      return (
        <div id="error" className="error">
          {this.props.updateProfileError || this.props.locationsError}
        </div>
      );
    }
  }

  render() {
    return (
      <Loader id="loading" color="#fff" loaded={!this.props.fetchUserLoading}>
        <div className="page-wrapper">
          <div className="page">
            <Card className="card signup">
              <CardTitle title="Edit Profile" />
              <CardText>
                {this.renderError()}
                <TextField
                  id="first-name"
                  label="First Name"
                  onChange={firstName => this.setState({ firstName })}
                  value={this.state.firstName}
                />

                <TextField
                  id="last-name"
                  label="Last Name"
                  onChange={lastName => this.setState({ lastName })}
                  value={this.state.lastName}
                />
                <SelectField
                  id="locations"
                  itemLabel="name"
                  itemValue="id"
                  label="Location"
                  menuItems={this.props.locations}
                  onChange={locationId => this.setState({ locationId })}
                  position={SelectField.Positions.BELOW}
                  value={this.state.locationId}
                />
                <TextField
                  id="email"
                  label="Email"
                  onChange={email => this.setState({ email })}
                  placeholder=""
                  type="email"
                  value={this.state.email}
                />
                <TextField
                  id="manager"
                  label="Manager"
                  onChange={manager => this.setState({ manager })}
                  placeholder=""
                  value={this.state.manager}
                />
                <TextField
                  id="role"
                  label="Role"
                  onChange={role => this.setState({ role })}
                  placeholder=""
                  value={this.state.role}
                />
                <TextField
                  id="aboutme"
                  label="About Me"
                  onChange={aboutMe => this.setState({ aboutMe })}
                  placeholder=""
                  value={this.state.aboutMe}
                />
                <div className="signup__submit">
                  <Button
                    disabled={!this.formValid()}
                    label="Save"
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
      </Loader>
    );
  }
}

EditProfilePage.propTypes = {
  userData: PropTypes.object,
  locations: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    locations: state.location.locations,
  };
}

export default connect(mapStateToProps)(EditProfilePage);
