import { combineReducers, createStore, applyMiddleware } from 'redux'
import cakeReducer from './cake/cakeReducer'
import curdReducer from './curd/curdReducer'
import reduxLogger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension';



var rootReducer = combineReducers({
  cake: cakeReducer,
  curd: curdReducer
})


export var store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxLogger)))
