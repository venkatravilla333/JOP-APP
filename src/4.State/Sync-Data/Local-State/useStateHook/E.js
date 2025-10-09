import React, { useState } from 'react'
import F from './F'
import G from './G'

function E(props) {
  // var [name, setName] = useState('sachin')

  // console.log('render')

  // function updateName() {
  //   setName('kohli')
  // }
  return (
    <div>
      {/* <F name={name} />
      <G name={name} /> */}
      <F name={props.name} />
      <G name={props.name} />
    </div>
  )
}

export default E