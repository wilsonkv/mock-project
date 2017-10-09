const URL = process.env.REACT_APP_SERVER_URL;

class User {
  async login(email, password) {
    const response = await fetch(`${URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    return await response.json();
  }

  async getMe(jwt) {
    const response = await fetch(`${URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('teamb:bulls'),
        jwt,
      },
    });

    return await response.json();
  }

}

export default new User();
