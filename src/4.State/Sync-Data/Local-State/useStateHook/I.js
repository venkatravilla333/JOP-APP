import React from 'react'
import J from './J'
import K from './K'

function I(props) {
  console.log(props)
  return (
    <div>
      <J name={props.name} />
      <K/>
    </div>
  )
}

export default I