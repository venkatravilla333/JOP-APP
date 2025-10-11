import React, { useState } from 'react'
import B from '../B'
import C from '../C'

export var nameContext = React.createContext()
export var ageContext = React.createContext()

function A() {
  var [name, setName] = useState('sachin')
  var [age, setAge] = useState(40)

  function updateName() {
    setName('kohli')
  }
  function updateAge() {
    setAge(age+1)
  }
  
  return (
    <div>
      <h2>Name: {name}</h2>
      <button onClick={updateName}>update name</button>
      <h2>Age: {age}</h2>
      <button onClick={updateAge}>update age</button>
      <ageContext.Provider value={age}>
         <nameContext.Provider value={name}>
          <B />
          <C />
         </nameContext.Provider>
      </ageContext.Provider>
     
    </div>
  )
}

export default A