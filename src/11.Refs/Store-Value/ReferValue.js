import React, { useEffect, useState, useRef } from 'react'

function ReferValue() {
   var [timer, setTimer] = useState(0)

 var timerRef =  useRef()

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((preTimer)=> preTimer+1)
    }, 1000)
    return  ()=> {
      clearInterval(timerRef.current)
     }
  })
  
  return (
    <div>
      <h3>Timer: {timer}</h3>
      <button onClick={()=>clearInterval(timerRef.current)}>stop timer</button>
    </div>
  )
}

export default ReferValue