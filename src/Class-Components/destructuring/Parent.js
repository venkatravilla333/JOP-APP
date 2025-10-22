import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'sachin'
    }
  }
  render() {
    var {name} = this.state
    return (
      <div>
        {/* <h3>Name:{this.state.name}</h3> */}
        <h3>Name:{name}</h3>
        <Child name={name} />
      </div>
    )
  }
}

export default Parent