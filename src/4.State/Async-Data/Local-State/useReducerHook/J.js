import React, { useReducer, useState } from 'react'

function J(props) {
console.log(props)
  // var initialState = {
  //   noOfCakes: 200
  // }

  // var reducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case 'BUYCAKE':
  //       return {
  //         noOfCakes: state.noOfCakes - 1
  //       }
  //       break;
     
  //   }
  // }
  // var [state, dispath] = useReducer(reducer, initialState)
  return (

    <div>
      <h3>J: noOf cakes: {props.state.noOfCakes}</h3>
      <button onClick={()=>props.dispatch({type: 'BUYCAKE'})}>buy cake</button>
     
    </div>
  )
}

export default J