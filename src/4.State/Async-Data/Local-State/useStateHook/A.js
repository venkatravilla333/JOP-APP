import React, { useEffect, useState } from 'react'
import axios from 'axios'
import B from './B'
import C from './C'

function A() {
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
      <B />
      <C data={{loading, posts, error}} />
    </div>
  )
}

export default A