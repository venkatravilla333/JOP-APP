import {configureStore} from '@reduxjs/toolkit'

import cakeReducer from './cakeSlice.js'
import curdReducer from './curdSlice.js'
import postsReducer from './postsSlice.js'

export var store = configureStore({
  reducer: {
    cakeReducer,
    curdReducer,
    postsReducer
  }
})