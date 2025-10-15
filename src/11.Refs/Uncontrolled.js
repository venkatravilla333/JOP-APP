import React, { useRef, useState } from 'react'

function Uncontrolled() {
  var [name, setName] = useState('')
  console.log(name)
  var inputRef = useRef()
  
  function getValue() {
    console.log(inputRef.current.value)
    setName(inputRef.current.value)
  }
  return (
    <div>
      <h3>Name: {name}</h3>
      <input type="text" ref={inputRef} />
      <button onClick={getValue}>get value</button>
    </div>
  )
}

export default Uncontrolled