import React from 'react'

function Child({data}) {
  // console.log(props)
  // var { data:[name1, name2, name3] } = props
  var [name1, name2, name3] = data
  return (
    <div>
      {/* <h4>{props.data[0]}</h4>
      <h4>{props.data[1]}</h4>
      <h4>{props.data[2]}</h4> */}
      <h4>{name1}</h4>
      <h4>{name2}</h4>
      <h4>{name3}</h4>
    </div>
  )
}

export default Child