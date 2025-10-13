import React, { useEffect } from 'react'
import { store } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake, sellCake } from '../cake/actionCreator'
import { buyCurd } from '../curd/actionCreators'
import { fetchPosts } from '../Api-Data/actionCreator'

function J() {
  var dispatch = useDispatch()
  // console.log(store.getState())
 var noOfcakes =  useSelector((state) => {
    return state.cake.noOfcakes
 })
 var noOfCurds =  useSelector((state) => {
    return state.curd.noOfCurd
 })
 var data =  useSelector((state) => {
    return state.posts
 })
  
  // function getdata() {
  //   dispatch(fetchPosts())
  // }

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  
  return (
    <div>
      <h2>Data from api</h2>
      {/* <button onClick={getdata}>get data</button> */}

      {
        data.loading ? <h1>Loading</h1> : data.error ? <h2>{data.error}</h2> :
          data.posts.map((post) => {
            return <div key={post.id} style={{border:"2px solid red", margin: "15px", padding:"20px"}}>
              <p>Id: {post.id}</p>
              <p>UserId: {post.userId}</p>
              <p>Title: {post.title}</p>
              <p>Body: {post.body}</p>
            </div>
          })
      }

      <h2>J: Cakes: {noOfcakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buycake</button>
      <button onClick={()=>dispatch(sellCake())}>Sellcake</button>
      <h2>J: Curds: {noOfCurds}</h2>
      <button onClick={()=>dispatch(buyCurd())}>Buycurd</button>
      
    </div>
  )
}

export default J