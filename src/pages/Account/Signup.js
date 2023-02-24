import React, { useState, useRef } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';

const Signup = () => {

  const email = useRef()
  const password = useRef()
  const passwordConfirm = useRef()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSignup = (e) => {
    e.preventDefault()
    if (password.current.value !== passwordConfirm.current.value) {
      return setError("Password Comfirmation Incorrect")
    }

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        setError("")
        setSuccess(true)
        setLoading(true)
      })
      .catch((err) => {
        console.log(err.code)
        if (err.code === "auth/email-already-in-use") {
          return setError("Email already in use")
        }
        setError("Failed to create an account")
      })
    setLoading(false)
    setSuccess(false)
  }

  return (
    <div className="account">
      <div className="account__bg bg"></div>
      <div className="account__section section">
        <div className='card'>
          {error && <h4 className='card-noti'>{error}</h4>}
          {success && <h4 className='card-noti success'>Account Successfully Created! Please {<Link style={{color: "black"}} to="/login">Login</Link>}</h4>}
          <h1 className='section__title'>Sign Up</h1>
          <form className='card-main' onSubmit={handleSignup}>
            <div id='email'>
              <label className='form-label'>Email</label> <br />
              <input className='form-input' type='email' ref={email} required />
            </div>
            <div id='password'>
              <label className='form-label'>Password</label> <br />
              <input className='form-input' type='password' ref={password} required />
            </div>
            <div id='password-confirm'>
              <label className='form-label'>Password Confirmation</label> <br />
              <input className='form-input' type='password' ref={passwordConfirm} required />
            </div>
            <button disabled={loading} className='card-button' type='submite'>Sign Up</button>
            <hr />
            <div className='card-text'>
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Signup