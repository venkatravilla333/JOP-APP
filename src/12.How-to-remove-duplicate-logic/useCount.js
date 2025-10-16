import React, { useState } from 'react'

function useCount() {
  var [count, setCount] = useState(0)
  
  function updateCount() {
    setCount(count+1)
  }
  return [count, updateCount]
}

export default useCount