import React, { useContext, useState } from 'react'
import { nameContext, postsContext } from './A'

function J() {
  
  // var name =  nameContext._currentValue
  // var [state, dispatch] = useContext(nameContext)
  var {data} = useContext(postsContext)
  console.log(data)
  return (
    <div>
      <h2>J</h2>
      {/* <h3>J name: {state.name} </h3>
      <button onClick={() => dispatch({ type: 'UPDATENAME' })}>update name</button> */}
      {
        data.loading ? <h2>Loading</h2> : data.error ? <h3>{data.error}</h3> :
          data.posts.map((post) => {
            return <div>
              <p>User id: {post.userId}</p>
              <p>id: {post.id}</p>
              <p>title: {post.title}</p>
              <p>Body: {post.body}</p>
            </div>
          })
     }
   </div>
  )
}

export default J