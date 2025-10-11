import React, { useContext, useState } from 'react'
import { nameContext } from './A'

function J() {
  
  // var name =  nameContext._currentValue
  var [state, dispatch] = useContext(nameContext)
  // var age = useContext(ageContext)
  return (
   <div>
      <h3>J name: {state.name} </h3>
      <button onClick={()=>dispatch({type: 'UPDATENAME'})}>update name</button>
   </div>
  )
}

export default J