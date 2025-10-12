import React, { useEffect, useState } from 'react'

function Parent() {
  var [X, setX] = useState(0)
  var [Y, setY] = useState(0)

  function updateState(e) {
    console.log('state updated')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('effect runs')
    window.addEventListener('mousemove', updateState)
  }, [])
  
  console.log('render')
  return (
    <div>
      <h2>X: {X}</h2>
      <h2>Y: {Y}</h2>
    </div>
  )
}

export default Parent