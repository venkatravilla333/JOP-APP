import React, { useEffect, useReducer, useState } from 'react'
import B from './B'
import C from './C'
import axios from 'axios'

export var nameContext = React.createContext('dhoni')
export var postsContext = React.createContext()
// export var ageContext = React.createContext()

function A() {
//  var initialState = {
//     name: 'sachin'
//   }

//   var reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'UPDATENAME':
//         return {
//           name: state.name = 'kohli'
//         }
//         break;
     
//     }
//   }
  //   var [state, dispatch] = useReducer(reducer, initialState)

  var initialState = {
    loading: false,
    posts: [],
    error: null
  }
  
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

   useEffect(() => {
    dispatch({type: 'FETCH_DATA_REQUEST'})
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
       dispatch({type: 'FETCH_DATA_SUCCESS', payload: res.data})
      }).catch((error) => {
      dispatch({type: 'FETCH_DATA_FAILURE', payload: error.message})
    })
  }, [])

  
  return (
    <div>
      {/* <h2>Name: {state.name}</h2> */}
      {/* <button onClick={updateName}>update name</button> */}
      <postsContext.Provider value={{data}}>
         {/* <nameContext.Provider value={[state, dispatch]}>
         </nameContext.Provider> */}
         <B />
         <C />
        
      </postsContext.Provider>
     
    </div>
  )
}

export default A