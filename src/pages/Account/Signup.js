import React, { useState } from 'react';
import { useRef } from 'react';

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  return (
    <>
      <div className='card'>
          <h1 className='section__title'>Sign Up</h1>
        <div className='card-main'>
          <div id='email'>
            <label className='form-label'>Email</label> <br />
            <input className='form-input' type='email' ref={emailRef} />
          </div>
          <div id='password'>
            <label className='form-label'>Password</label> <br />
            <input className='form-input' type='password' ref={passwordRef} />
          </div>
          <div id='password-confirm'>
            <label className='form-label'>Password Confirmation</label> <br />
            <input className='form-input' type='password' ref={passwordConfirmRef} />
          </div>
          <button className='card-button' type='submite'>Sign Up</button>
          <hr />
          <div className='card-text'>
            Already have an account? <a href="#">Login</a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Signup