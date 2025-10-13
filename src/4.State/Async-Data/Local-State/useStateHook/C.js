import React from 'react'
import H from './H'
import I from './I'

function C(props) {
  console.log(props)
  return (
    <div>
      <H />
      <I data={props.data} />
    </div>
  )
}

export default C