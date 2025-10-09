import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
  return (
    <div>
      <Child1 name='sachin' age = {40} />
      <Child2 name='kohli' age={35} />
    </div>
  )
}

export default Parent