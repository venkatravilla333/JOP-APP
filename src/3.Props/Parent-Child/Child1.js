import React from 'react'

function Child1(props) {
  console.log(props)
  return (
    <div>Child1: {props.name}, {props.age}</div>
  )
}

export default Child1