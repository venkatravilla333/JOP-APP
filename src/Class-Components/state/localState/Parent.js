import Child from "./Child";
import React from "react";

class Parent extends React.Component{
  constructor() {
    super()
    this.state = {
      name: 'sachin',
      count: 0
    }
    // this.updateCount = this.updateCount.bind(this)
  }

  updateCount = () => {
    this.state.count = this.state.count+1 //direct update
    console.log(this)
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    return <div>
      <h1>Parent com: {this.state.name}</h1>
      <h1>Parent com: {this.state.count}</h1>
      {/* <button onClick={()=>this.setState({name: this.state.name='kohli'})}>update state</button> */}
      <button onClick={this.updateCount}>update state</button>
      {/* {console.log(new Child())} */}
      <Child count={this.state.count} />
    
    </div>
  }
}

export default Parent