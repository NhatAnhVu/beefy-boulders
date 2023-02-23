import React from 'react'

const Login = () => {
  return (
    <div className='card'>
      <h1 className='section__title'>Login</h1>
      <div className='card-main'>
        <div id='email'>
          <label className='form-label'>Email</label> <br />
          <input className='form-input' type='email' />
        </div>
        <div id='password'>
          <label className='form-label'>Password</label> <br />
          <input className='form-input' type='password' />
        </div>
        <button className='card-button' type='submite'>Login</button>
        <hr />
        <div className='card-text'>
          Creat new account? <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default Login