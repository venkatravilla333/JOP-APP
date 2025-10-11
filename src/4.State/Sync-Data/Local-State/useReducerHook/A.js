import React, { useReducer } from 'react'
import B from './B'
import C from './C'

function A() {
  var initialState = {
    noOfCakes: 200
  }

  var reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BUYCAKE':
        return {
          noOfCakes: state.noOfCakes - 1
        }
        break;
     
    }
  }
  var [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h3>A: No of cakes: {state.noOfCakes}</h3>
      <B />
      <C state={state} dispatch={dispatch} />
    </div>
  )
}

export default A