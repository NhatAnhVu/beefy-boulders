import React from 'react'
import Signup from './Signup'

const Account = () => {
  return (
    <div className="account">
      <div className="account__bg bg"></div>
      <div className="account__section section">
        <Signup />
      </div>
    </div>
  )
}

export default Account