import React, { Component } from 'react'
import B from './B'
import { store } from '../Redux/store'
import { Provider } from 'react-redux'

export class A extends Component {
  render() {
    return (
      <Provider store={store}>
        <B/>
      </Provider>
    )
  }
}

export default A