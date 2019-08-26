import axios from 'axios';

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      phonenr: newUser.phonenr,
      plc_datebirth: newUser.plc_datebirth,
      gender: newUser.gender,
      street_nr: newUser.street_nr,
      postcode: newUser.postcode,
      city: newUser.city
    })
    .then(response => {
      console.log('Registered');
    });
};

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const getProfile = user => {
  return axios
    .get('users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};
