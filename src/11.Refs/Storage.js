import React, { useRef, useState } from 'react'

function Storage() {
  var nv = 0
  var [sv, setSv] = useState(0)
  var rv = useRef(0)
  console.log(rv)

  // function updateData() {
  //   nv++
  //   console.log(nv)
  //   setSv(sv + 1)
  //   console.log(sv)
    
  // }

  function updateNV() {
    nv++
    console.log(nv)
  }

  function updateSV() {
    setSv(sv + 1)
    console.log(sv)
  }
  function updateRV() {
    rv.current++
    console.log(rv)
  }
  console.log('render')
  return (
    <div>
      <h3>Nv: {nv}</h3>
      <h3>Sv: {sv}</h3>
      <h3>Rv: {rv.current}</h3>
      <button onClick={updateNV}>update NV</button>
      <button onClick={updateSV}>update SV</button>
      <button onClick={updateRV}>update RV</button>
    </div>
  )
}

export default Storage