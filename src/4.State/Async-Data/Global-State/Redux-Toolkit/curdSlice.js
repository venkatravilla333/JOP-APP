import { createSlice } from "@reduxjs/toolkit";

var initialState = {
  noOfCurds: 50
}

var curdSlice = createSlice({
  name: 'curd',
  initialState: initialState,
  reducers: {
    buyCurd: (state) => {
      state.noOfCurds -= 1
    }
  }
})

export default curdSlice.reducer

export let {buyCurd} = curdSlice.actions