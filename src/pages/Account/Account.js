import React from 'react'
import Signup from './Signup'
import Login from './Login'
import Page from './Page';

const Account = () => {
  return (

      <div className="account">
        <div className="account__bg bg"></div>
        <div className="account__section section">
          <Login />
        </div>
      </div>

  )
}

export default Account