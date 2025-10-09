import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {

  // var x = 'sachin'
  var [x, setX] = useState('sachin')
  // console.log(x)
  // console.log(setX)

  function test(data) {
    console.log(data)
    // x = data
    // console.log(x)
    setX(data)

  }
  console.log('render')
  return (
    <div>
      <h2>parent com: {x}</h2>
      <Child1 test = {test } />
      <Child2 />
    </div>
  )
}

export default Parent