import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phonenr: '',
      plc_datebirth: '',
      gender: '',
      street_nr: '',
      postcode: '',
      city: '',
      errors: {}
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      phonenr: decoded.phonenr,
      plc_datebirth: decoded.plc_datebirth,
      gender: decoded.gender,
      street_nr: decoded.street_nr,
      postcode: decoded.postcode,
      city: decoded.city
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron mt-5'>
          <div className='col-sm-8 mx-auto'>
            <h1 className='text-center'>PROFILE</h1>
          </div>
          <table className='table col-md-6 mx-auto'>
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>{this.state.phonenr}</td>
              </tr>
              <tr>
                <td>Place/Date of birth</td>
                <td>{this.state.plc_datebirth}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{this.state.gender}</td>
              </tr>
              <tr>
                <td>Street, Nr.</td>
                <td>{this.state.street_nr}</td>
              </tr>
              <tr>
                <td>Postal code</td>
                <td>{this.state.postcode}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{this.state.city}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Profile;
