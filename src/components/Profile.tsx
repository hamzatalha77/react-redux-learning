import React from 'react'
import { useSelector } from 'react-redux'

interface RootState {
  user: {
    value: {
      name: string
      age: number
      email: string
    }
  }
  theme: {
    value: {
      color: string
    }
  }
}

const Profile = () => {
  const user = useSelector((state: RootState) => state.user.value)
  const themeColor = useSelector((state: RootState) => state.theme.value.color)

  return (
    <div style={{ color: themeColor }}>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile
