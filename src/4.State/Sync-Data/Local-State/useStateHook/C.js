import React from 'react'
import H from './H'
import I from './I'

function C(props) {
  console.log(props)
  return (
    <div>
      <H />
      <I name={props.name} />
    </div>
  )
}

export default C