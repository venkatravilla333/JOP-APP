import React, { Component } from 'react'

import {connect} from 'react-redux'
import { buyCake } from '../Redux/cake/actionCreator'
import { buyCurd } from '../Redux/curd/actionCreators'

export class D extends Component {
  render() {
    return (
      <div>
        <h3>No of cakes: {this.props.noOfCakes}</h3>
        <button onClick={this.props.buyCake}>Buy cake</button>
        <h3>No of curds: {this.props.noOfCurd}</h3>
        <button onClick={this.props.buyCurd}>Buy curd</button>
      </div>
    )
  }
}


let mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
    noOfCurd: state.curd.noOfCurd,
  }
}

let mapDispatchToProps = (dispatch) => {
  console.log('hello')
  return {
    buyCake : ()=>{dispatch(buyCake())},
    buyCurd : ()=>{dispatch(buyCurd())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (D)