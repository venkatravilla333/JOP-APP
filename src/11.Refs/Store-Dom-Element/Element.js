import React, { useEffect, useRef } from 'react'

function Element() {
  var inputRef = useRef()

  useEffect(() => {
    console.log('effect called')
    console.log(inputRef)
    inputRef.current.focus()
  })
  console.log('render')

  function getData() {
    console.log(inputRef.current.value)
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={getData}>get value</button>
    </div>
  )
}

export default Element