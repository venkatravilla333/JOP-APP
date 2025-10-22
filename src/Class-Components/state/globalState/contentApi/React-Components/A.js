import React, { Component } from 'react'
import B from './B'

export var nameContext = React.createContext()
export var ageContext = React.createContext()
export var colorContext = React.createContext()

export class A extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'sachin',
      age: 40
    }
  }
  render() {
    return (
      <div>
        <colorContext.Provider value={'red'}>
        <ageContext.Provider value={this.state.age}>
        <nameContext.Provider value={this.state.name}>
        <B/>
        </nameContext.Provider>
        </ageContext.Provider>
        </colorContext.Provider>
      </div>
    )
  }
}

export default A