import React from 'react'

function Child2(props) {
   console.log('child-2 render ')
  return (
    <div>Child2: {props.x}</div>
  )
}

export default Child2