import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'
import Heavy from './Heavy'

function Parent() {

  var [count, setCount] = useState(0)

  //state values

  // var [stateNum, setNum] = useState(0)
  // var [stateObj, setObj] = useState({value: 100})
  // var [stateArr, setArr] = useState([1,2,3])
  // var [stateFun, setFun] = useState(()=>{})
  
  var [arr, setArr] =  useState([{name: 'sachin', age: 40}, {name: 'kohli', age: 35}, {name: 'gill', age: 25}])
  
  
  // inline values (normal variables)

  // var normalNum = 0
  // var normalObj = {value: 100}
  // var normalArr = [1, 2, 3]
  // var normalFun = ()=>{}
    
  //Computed values
  
  // var computedNum = stateNum + 1
  // var computedObj = { stateObj, age: 40 }
  // var computedArr = [...stateArr, 'kohli']
  // var computedFun= ()=> stateFun

//  var filterRes = arr.filter((obj) => {
//     return obj.age < 30
//  })
  
  // var memoizeFilterRes = useMemo(()=>({filterRes}), [count])
  
  // var memoizeObj = useMemo(()=>({ computedObj  }), [])
  // var memoizeArr = useMemo(()=>({ computedArr  }), [])
  // var memoizeFun = useCallback(()=>({ computedFun  }), [])

  // var updateCount = () => {
  //   setCount(count+1)
  // }
  

//  var updateStateNum = () => {
//     setNum(stateNum+1)
//   }
//  var updateStateObj = () => {
//    setObj({
//      value: 100,
//      age : 40
//     })
//   }

  // var updateStateArr = () => {
  //   setArr([...stateArr, 10])
  // }

  // var updateCount = useCallback(() => {
  //   setCount(count+1)
  // }, []) 

  var updateCount = () =>{
      setCount(count+1)
  }
  
  console.log('parent render')
  return (
    <div>
      <h4>Parent (count): {count}</h4>
      {/* <button onClick={updateCount}>update count</button> */}
      {/* <h4>Parent (num): {stateNum}</h4> */}
      {/* <h4>Parent (num): {stateObj.value}</h4> */}
      {/* <h4>Parent (num): {stateArr}</h4> */}
      {/* <button onClick={updateStateNum}>update num</button> */}
      {/* <button onClick={updateStateObj}>update obj</button> */}
      {/* <button onClick={updateStateArr}>update arr</button> */}
      {/* <Child stateNum = {stateNum} /> */}
      {/* <Child stateObj = {stateObj} /> */}
      {/* <Child stateArr = {stateArr} /> */}
      {/* <Child stateFun = {stateFun} /> */}
      {/* <Child normalNum = {normalNum} /> */}
      {/* <Child normalObj = {normalObj} /> */}
      {/* <Child normalArr = {normalArr} /> */}
      {/* <Child normalFun = {normalFun} /> */}
      {/* <Child computedNum = {computedNum} /> */}
      {/* <Child computedObj = {computedObj} /> */}
      {/* <Child computedArr = {computedArr} /> */}
      {/* <Child computedFun = {computedFun} /> */}
      {/* <Child memoizeObj = {memoizeObj} /> */}
      {/* <Child memoizeArr = {memoizeArr} /> */}
      {/* <Child memoizeFun = {memoizeFun} /> */}
      {/* <Child filterRes = {filterRes} /> */}
      {/* <Child memoizeFilterRes = {memoizeFilterRes} /> */}
      {/* <Child stateNum={stateNum} /> */}
      {/* <Child stateObj={stateObj} /> */}
      {/* <Child stateArr={stateArr} /> */}
      {/* <button onClick={updateCount}>update count</button> */}
      {/* <Heavy updateCount={updateCount} /> */}
      <Heavy/>
    </div>
  )
}

export default Parent