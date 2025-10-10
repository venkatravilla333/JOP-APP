import React, { useContext, useState } from 'react'
import { ageContext, nameContext } from './A'

function F() {
  var name = useContext(nameContext)
  var age = useContext(ageContext)
  return (

    <div>
      <h3>F name: {name}, age: {age}</h3>
    </div>
  )
}

export default F