import React from 'react';

const Signup = () => {

  return (
      <div className='card'>
          <h1 className='section__title'>Sign Up</h1>
        <div className='card-main'>
          <div id='email'>
            <label className='form-label'>Email</label> <br />
            <input className='form-input' type='email' />
          </div>
          <div id='password'>
            <label className='form-label'>Password</label> <br />
            <input className='form-input' type='password' />
          </div>
          <div id='password-confirm'>
            <label className='form-label'>Password Confirmation</label> <br />
            <input className='form-input' type='password' />
          </div>
          <button className='card-button' type='submite'>Sign Up</button>
          <hr />
          <div className='card-text'>
            Already have an account? <a href="#">Login</a>
          </div>
        </div>
      </div>
  )
}

export default Signup