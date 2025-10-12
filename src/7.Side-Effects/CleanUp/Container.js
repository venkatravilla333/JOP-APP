

import React, { useState } from 'react'
import Parent from './Parent'

function Container() {
 var [display, setDisplay] = useState(true)
  return (
    <div>
      {
        display && <Parent />
      }
      <button onClick={()=>setDisplay(!display)}>toggle display</button>
    </div>
  )
}

export default Container