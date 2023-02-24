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

  return (
    <div className="account">
      <div className="account__bg bg"></div>
      <div className="account__section section">
        {error && <h4 className='card-noti'>{error}</h4>}
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    </div>
  )
}

export default Account