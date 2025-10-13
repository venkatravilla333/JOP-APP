import React from 'react'

function J(props) {
  console.log(props.data)
  return (
    <div>
      <h2>J: data</h2>
       {
        props.data.loading ? <h1>Loading</h1> : props.data.error ? <h3>{props.data.error.message}</h3> : 
          props.data.posts.map((post) => {
            return <div key={post.id} style={{border:"2px solid red", margin: "15px", padding:"20px"}}>
              <p>Id: {post.id}</p>
              <p>UserId: {post.userId}</p>
              <p>Title: {post.title}</p>
              <p>Body: {post.body}</p>
            </div>
         }) 
      }
      
  </div>
   
  )
}

export default J