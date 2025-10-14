import React, { useState } from 'react'
import './dynamic.css'

function Dynamic() {
  var [colorClass, setColorClass] = useState(true)
  
  function updateColor() {
    setColorClass(!colorClass)
  }
  var myClass = colorClass ? 'success' : 'error'
  
  return (
    <>
      <div className={myClass}>Dynamic</div>
      <button onClick={updateColor}>update</button>
    </>

  )
}

export default Dynamic