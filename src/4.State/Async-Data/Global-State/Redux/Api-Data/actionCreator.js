import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionTypes"

import axios from 'axios'


export var fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST
  }
}
export var fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  }
}
export var fetchDataFailure = (data) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: data
  }
}

export var fetchPosts = () => {
  return (dispath) => {
    dispath(fetchDataRequest())
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      dispath(fetchDataSuccess(res.data))
      }).catch((err) => {
      dispath(fetchDataFailure(err.message))
    })
  }
}