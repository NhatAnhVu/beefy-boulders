import React from 'react'
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Account = () => {
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const handleLogOut = () => {
    signOut(auth).then(() => {
      setError("")
      navigate("/login")
    })
      .catch(err => {
        setError("Something Wrong!")
        console.log(err.message)
      })
  }

  const user = auth.currentUser;
  const displayName = user.displayName

  return (
    <div className="account">
      <div className="account__bg bg"></div>
      <div className="account__section section">
        <div className="account__card card">
          <h4>{`Hello ${displayName}`}!</h4>
          <p>Sorry! We are still working for this feature</p>
          {error && <h4 className='card-noti'>{error}</h4>}
          <button className='card-button' onClick={handleLogOut}>Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default Account