import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../redux/theme'

function ChangeColor() {
  const [color, setColor] = useState('')
  const dispatch = useDispatch()

  const handleColorChange = () => {
    dispatch(changeColor({ color: color })) // Pass the color as an object with a "color" property
  }

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value)
        }}
      />
      <button onClick={handleColorChange}>CHANGE COLOR</button>
    </div>
  )
}

export default ChangeColor
