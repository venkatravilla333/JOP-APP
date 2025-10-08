import React from 'react'

function Child1(props) {
  // console.log(props)
  var data = 'child-1 data'
  console.log('child-1 render ')
  return (
    <div>
      <h4>Child1</h4>
      <button onClick={()=>props.test(data)}>send data</button>
    </div>
  )
}

export default Child1