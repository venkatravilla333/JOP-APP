import React, { useState } from 'react'
import Child from './Child'

function Parent() {
  var [data] = useState(['sachin', 'dhoni', 'kohli'])

  // var {name, age} = data //destructuring (ES-6)
  var [name1, name2, name3] = data //destructuring (ES-6)
  return (
    <div>
      {/* <h3>Name: {data.name}</h3>
      <h3>Age: {data.age}</h3> */}
      {/* <h3>Name: {name}</h3>
      <h3>Age: {age}</h3> */}
      {/* <h3>{data[0]}</h3>
      <h3>{data[1]}</h3>
      <h3>{data[2]}</h3> */}
      {/* <h3>{name1}</h3>
      <h3>{name2}</h3>
      <h3>{name3}</h3> */}
      <Child data={data} />
    </div>
  )
}

export default Parent