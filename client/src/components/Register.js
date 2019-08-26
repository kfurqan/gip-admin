import React, { Component } from 'react';
import { register } from './UserFunctions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phonenr: '',
      plc_datebirth: '',
      gender: '',
      street_nr: '',
      postcode: '',
      city: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      phonenr: this.state.phonenr,
      plc_datebirth: this.state.plc_datebirth,
      gender: this.state.gender,
      street_nr: this.state.street_nr,
      postcode: this.state.postcode,
      city: this.state.city
    };

    register(newUser).then(res => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mt-5 mx-auto'>
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className='h3 mb-3 font-weight-normal'>Register</h1>
              <div className='form-group'>
                <label htmlFor='name'>First name</label>
                <input
                  type='text'
                  className='form-control'
                  name='first_name'
                  placeholder='Enter your first name'
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Last name</label>
                <input
                  type='text'
                  className='form-control'
                  name='last_name'
                  placeholder='Enter your lastname name'
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  placeholder='Enter email'
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='phonenr'>Phone Number</label>
                <input
                  type='text'
                  className='form-control'
                  name='phonenr'
                  placeholder='Phone Number'
                  value={this.state.phonenr}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='plc_datebirth'>Place/Date of birth</label>
                <input
                  type='text'
                  className='form-control'
                  name='plc_datebirth'
                  placeholder='Place/Date of birth'
                  value={this.state.plc_datebirth}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='gender'>Gender</label>
                <input
                  type='text'
                  className='form-control'
                  name='gender'
                  placeholder='m/f'
                  value={this.state.gender}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='street_nr'>Street, Nr.</label>
                <input
                  type='text'
                  className='form-control'
                  name='street_nr'
                  placeholder='Street, Nr.'
                  value={this.state.street_nr}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='postcode'>Postal code</label>
                <input
                  type='text'
                  className='form-control'
                  name='postcode'
                  placeholder='ZIP'
                  value={this.state.postcode}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='city'>City</label>
                <input
                  type='text'
                  className='form-control'
                  name='city'
                  placeholder='City'
                  value={this.state.city}
                  onChange={this.onChange}
                />
              </div>
              <button
                type='submit'
                className='btn btn-lg btn-primary btn-block'
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
