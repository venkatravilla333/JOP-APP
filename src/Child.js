
function Child() {
  function update(name) {
    console.log('update', name)
  }
  return (
    <button onClick={()=>update('sachin')}>click</button>
  )
}

export default Child