import sessionStorage from 'sessionstorage';

const URL = process.env.REACT_APP_SERVER_URL;

class Location {
  _getToken() {
    return sessionStorage.getItem('jwt');
  }

  async get() {
    const jwt = this._getToken();

    const response = await fetch(`${URL}/locations`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('mock:password'),
        jwt,
      },
    });

    return await response.json();
  }
}

export default new Location();
