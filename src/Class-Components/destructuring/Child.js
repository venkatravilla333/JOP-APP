import React, { Component } from 'react'

export class Child extends Component {
  render() {
    var {name} = this.props
    return (
      // <div>Child: {this.props.name}</div>
      <div>Child: {name}</div>
    )
  }
}

export default Child