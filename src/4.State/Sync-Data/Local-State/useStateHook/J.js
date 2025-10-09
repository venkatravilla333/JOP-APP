import React, { useState } from 'react'

function J(props) {
  //  var [name, setName] = useState('sachin')
  
  //   console.log('render')
  
  //   function updateName() {
  //     setName('kohli')
  //   }
  return (
    // <div>J: name: {name}</div>
    <div>J:name: {props.name}</div>
  )
}

export default J