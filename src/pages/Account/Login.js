import React, { useState, useRef } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const Login = ( ) => {
  const email = useRef()
  const password = useRef()
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then(userCredential => {
        navigate("/account")
      })
      .catch(err  => {
        setError("Incorrect Email or Password")
        console.log(err.code)
      })
  }

  return (
    <div className="account">
      <div className="account__bg bg"></div>
      <div className="account__section section">
        <div className='card'>
        {error && <h4 className='card-noti'>{error}</h4>}
          <h1 className='section__title'>Login</h1>
          <form className='card-main' onSubmit={handleLogin}>
            <div id='email'>
              <label className='form-label'>Email</label> <br />
              <input className='form-input' type='email' ref={email} />
            </div>
            <div id='password'>
              <label className='form-label'>Password</label> <br />
              <input className='form-input' type='password' ref={password} />
            </div>
            <button className='card-button' type='submite'>Login</button>
            <hr />
            <div className='card-text'>
              Creat new account? <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login