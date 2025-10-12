import React from 'react'

function Parent() {
  var names = ['sachin', 'kohli', 'dhoni', 'gill', 'sami', 'rahul', ]
  return (
    <div>
      <h4>Names</h4>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2>
      <h2>{names[3]}</h2>
      <h2>{names[4]}</h2> */}
      {
        names.map((name, index) => {
         return <h2 key={index}>{name}</h2>
        })
      }
    
    </div>
  )
}

export default Parent