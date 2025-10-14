import React, { useContext, useState } from 'react'
import { ageContext, nameContext, postsContext } from './A'

function F() {
 var {data} = useContext(postsContext)
  return (

    <div>
      <h3>F</h3>
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

export default F