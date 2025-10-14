import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
function J(props) {
console.log(props)
  // var initialState = {
  //   noOfCakes: 200
  // }

  var initialState = {
    loading: false,
    posts: [],
    error: null
  }

  // var reducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case 'BUYCAKE':
  //       return {
  //         noOfCakes: state.noOfCakes - 1
  //       }
  //       break;
     
  //   }
  // }
  // var [state, dispath] = useReducer(reducer, initialState)


  var postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return {
          ...state,
          loading: true
        }
        break;
      case 'FETCH_DATA_SUCCESS':
        return {
          ...state,
          loading: false,
          posts: action.payload
        }
        break;
      case 'FETCH_DATA_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        }
        break;
      default:
        return initialState
    }
    
  } 
  var [data, dispatch] = useReducer(postsReducer, initialState)

  // useEffect(() => {
  //   dispatch({type: 'FETCH_DATA_REQUEST'})
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //      dispatch({type: 'FETCH_DATA_SUCCESS', payload: res.data})
  //     }).catch((error) => {
  //     dispatch({type: 'FETCH_DATA_FAILURE', payload: error.message})
  //   })
  // }, [])

  function fetchData() {
    console.log('hello')
    dispatch({type: 'FETCH_DATA_REQUEST'})
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
       dispatch({type: 'FETCH_DATA_SUCCESS', payload: res.data})
      }).catch((error) => {
      dispatch({type: 'FETCH_DATA_FAILURE', payload: error.message})
    })
  }
  console.log('render')
  return (

    <div>
      <h3>J: noOf cakes: {props.state.noOfCakes}</h3>
      <button onClick={() => props.dispatch({ type: 'BUYCAKE' })}>buy cake</button>
      <button onClick={fetchData}>get data</button>
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