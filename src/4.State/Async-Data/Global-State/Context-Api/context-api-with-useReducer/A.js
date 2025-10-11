import React, { useReducer, useState } from 'react'
import B from './B'
import C from './C'

export var nameContext = React.createContext('dhoni')
// export var ageContext = React.createContext()

function A() {
 var initialState = {
    name: 'sachin'
  }

  var reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATENAME':
        return {
          name: state.name = 'kohli'
        }
        break;
     
    }
  }
  var [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div>
      <h2>Name: {state.name}</h2>
      {/* <button onClick={updateName}>update name</button> */}
      
         <nameContext.Provider value={[state, dispatch]}>
          <B />
          <C />
         </nameContext.Provider>
     
    </div>
  )
}

export default A