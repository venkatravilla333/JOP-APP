import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios'


export var fetchPosts = createAsyncThunk('posts', async(_, {rejectWithValue}) => {
    try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  } catch (error) {
    return rejectWithValue(error.message);
   }
})



var initialState = {
  loading: false,
  posts: [],
  error: null
}

var postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export default postsSlice.reducer