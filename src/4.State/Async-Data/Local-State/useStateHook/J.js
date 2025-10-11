import React, { useEffect, useState } from 'react'
import axios from 'axios'

function J() {
  var [loading, setLoading] = useState(false)
  var [posts, setPosts] = useState([])
  var [error, setError] = useState(null)

  // var [count, setCount] = useState(0)

  // function updateCount() {
  //   setCount(count+1)
  // }

  useEffect(() => {
    console.log('useeffect called')
  setLoading(true) 
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      console.log(res.data)
      setLoading(false)
      setPosts(res.data)
    }).catch((err) => {
      setLoading(false)
      setError(err.message)
    })
  }, [])

  
  // function getData() {
  //   setLoading(true) 
  // axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then((res) => {
  //     // console.log(res.data)
  //     setLoading(false)
  //     setPosts(res.data)
  //   }).catch((err) => {
  //     setLoading(false)
  //     setError(err.message)
  //   })
  // }

  console.log('render')
  return (
    <div>
      {/* <h3>J: count: {count}</h3> */}
      {/* <button onClick={getData}>get data J</button> */}
      {/* <button onClick={updateCount}>update count</button> */}
      {
        loading ? <h1>Loading</h1> : error ? <h3>{error.message}</h3> : 
          posts.map((post) => {
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