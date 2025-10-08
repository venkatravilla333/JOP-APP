import Child1 from "./Child1"
import Child2 from "./Child2"

function Parent() {
  var data = [{name: 'apple', price: 200},{name: 'banana', price: 50}, {name:'orange', price: 100}, {name: 'papaya', price: 150}]
  return (
    <div>
      <h2>Parent com</h2>
      {
        data.map((product) => {
          return <div>
            <h4>Name: {product.name}</h4>
            <h4>Price: {product.price}</h4>
          </div>
        })
      }
      <Child1 data = {data} />
      <Child2 />
    </div>
  )
}

export default Parent