import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { auth } from '../firebase'

const PrivateRoutes = () => {
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        localStorage.setItem("user", true)
      } else {
        localStorage.removeItem("user")
      }
    })
  }, [])
  
  const currentUser = JSON.parse(localStorage.getItem("user"))

  return (
    currentUser ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes