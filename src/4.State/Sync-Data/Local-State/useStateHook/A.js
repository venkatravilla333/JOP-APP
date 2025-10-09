import React, { useState } from 'react'
import B from './B'
import C from './C'

function A() {

   var [name, setName] = useState('sachin')

  console.log('render')

  function updateName() {
    setName('kohli')
  }
  return (
    <div>
      <B name={name} updateName={updateName} />
      <C name={name} />
      <button onClick={updateName}>update name A</button>
    </div>
  )
}

export default A