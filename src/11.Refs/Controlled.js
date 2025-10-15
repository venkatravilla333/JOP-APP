import React, { useState } from 'react'

function Controlled() {
  var [name, setName] = useState('')
  console.log('render')
  console.log(name)
  return (
    <div>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  />
    </div>
  )
}

export default Controlled