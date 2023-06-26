import React, { useState } from 'react'

const ChangeColor = () => {
  const [color, setColor] = useState('')
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value)
        }}
      />
      <button>CHANGE COLOR</button>
    </div>
  )
}

export default ChangeColor
