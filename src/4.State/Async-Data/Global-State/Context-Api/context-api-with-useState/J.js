import React, { useContext, useState } from 'react'
import { ageContext, nameContext } from './A'

function J() {
  
  // var name =  nameContext._currentValue
  var name = useContext(nameContext)
  var age = useContext(ageContext)
  return (
   
    <div>J name: {name}, age : {age}</div>
  )
}

export default J