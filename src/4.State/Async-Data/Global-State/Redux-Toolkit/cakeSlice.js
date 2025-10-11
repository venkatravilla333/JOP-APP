import { createSlice } from "@reduxjs/toolkit";

var initialState = {
  noOfCakes: 200
}

var cakeSlice = createSlice({
  name: 'cake',
  initialState: initialState,
  reducers: {
    buyCake: (state) => {
      state.noOfCakes -= 1
    },
    sellCake: (state) => {
      state.noOfCakes += 1
    }
  }
})

export default cakeSlice.reducer

export let {buyCake} = cakeSlice.actions
export let {sellCake} = cakeSlice.actions