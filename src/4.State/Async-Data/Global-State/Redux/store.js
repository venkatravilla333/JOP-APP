import { combineReducers, createStore, applyMiddleware } from 'redux'
import cakeReducer from './cake/cakeReducer'
import curdReducer from './curd/curdReducer'
import reduxLogger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension';
import { postsReducer } from './Api-Data/postsReducer';

import { thunk } from 'redux-thunk'



var rootReducer = combineReducers({
  cake: cakeReducer,
  curd: curdReducer,
  posts: postsReducer
})


export var store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxLogger, thunk)))
