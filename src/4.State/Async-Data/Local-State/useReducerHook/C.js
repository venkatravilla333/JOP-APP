import React from 'react'
import H from './H'
import I from './I'

function C(props) {
  console.log(props)
  return (
    <div>
      <H />
      <I state={props.state} dispatch={props.dispatch} />
    </div>
  )
}

export default C