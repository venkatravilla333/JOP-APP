import React from 'react'
import { store } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake, sellCake } from '../cake/actionCreator'
import { buyCurd } from '../curd/actionCreators'

function J() {
  var dispatch = useDispatch()
  // console.log(store.getState())
 var noOfcakes =  useSelector((state) => {
    return state.cake.noOfcakes
 })
 var noOfCurds =  useSelector((state) => {
    return state.curd.noOfCurd
 })
  
  return (
    <div>
      <h2>J: Cakes: {noOfcakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buycake</button>
      <button onClick={()=>dispatch(sellCake())}>Sellcake</button>
      <h2>J: Curds: {noOfCurds}</h2>
      <button onClick={()=>dispatch(buyCurd())}>Buycurd</button>
      
    </div>
  )
}

export default J