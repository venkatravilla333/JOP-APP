import React, { useState } from 'react'

function F(props) {
  // var [name, setName] = useState('sachin')

  // console.log('render')

  // function updateName() {
  //   setName('kohli')
  // }

  return (

    <div>
      <h3>F: name: {props.name}</h3>
      {/* <button onClick={updateName}>update count</button> */}
    </div>
  )
}

export default F