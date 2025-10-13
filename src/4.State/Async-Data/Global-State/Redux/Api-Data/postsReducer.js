import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionTypes"

var initialState = {
  loading: false,
  posts: [],
  error: null
}

export var postsReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true
      }
      break;
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      }
      break;
    case FETCH_DATA_FAILURE:
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