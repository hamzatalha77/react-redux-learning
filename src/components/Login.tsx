import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/user'

const Login = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: 'hamza', age: 24, email: 'hamza_ta7@hotmail.com' })
          )
        }}
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Login
