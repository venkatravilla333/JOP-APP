import React, { useMemo, useState } from 'react'

function Heavy() {
  var [x, setX] = useState(0)
  var [num, setNum] = useState(5)
  var factorialRes = useMemo(()=>calFatorial(num), [num]) 
  // var factorialRes  = calFatorial(num)
  

  console.log('child render')

  var updateX = () => {
    setX(x+1)
  }

  var updateNum = () => {
    setNum(num+1)
  }

  function calFatorial(num) {
    console.log('factorial')
    var factRes = 1
    for (var i = num; i >=1; i--){
      factRes = factRes*i
    }
    return factRes
  }
  return (
    <div>
      <h4>X: {x}</h4>
      <button onClick={updateX}>update X</button>
      <h4>Fact res : {factorialRes}</h4>
      <button onClick={updateNum}>update num</button>
    </div>
  )
}

export default React.memo(Heavy)