import React, { useContext, useState } from 'react'
import { ageContext, nameContext, postsContext } from './A'

function J() {
  
  // var name =  nameContext._currentValue
  var name = useContext(nameContext)
  var age = useContext(ageContext)
  var data = useContext(postsContext)
  console.log(data)
  return (
   <React.Fragment>
      <div>J name: {name}, age : {age}</div>
      <div>
        {
          data.loading ? <h1>Loading</h1> : data.error ? <h1>{data.error}</h1> :
            data.posts.map((post) => {
              return <div key={post.id} style={{border:"2px solid red", margin: "15px", padding:"20px"}}>
              <p>Id: {post.id}</p>
              <p>UserId: {post.userId}</p>
              <p>Title: {post.title}</p>
              <p>Body: {post.body}</p>
            </div>
            })
        }
      </div>
   </React.Fragment>
    
  )
}

export default J