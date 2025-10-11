import React, { useContext, useState } from 'react'
import { nameContext } from '../context-api-with-useReducer/A'

function G() {
   var [state, dispatch] = useContext(nameContext)
 

  return (

    <div>
      <h3>G:{state.name}</h3>
    </div>
  )
}

export default G