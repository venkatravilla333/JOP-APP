import React from 'react'
import J from './J'
import K from './K'

function I(props) {
  return (
    <div>
      <J state={props.state} dispatch={props.dispatch} />
      <K/>
    </div>
  )
}

export default I