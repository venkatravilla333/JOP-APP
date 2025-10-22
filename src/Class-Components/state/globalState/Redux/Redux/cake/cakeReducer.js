import { BUYCAKE, SELLCAKE } from "./actionTypes";



var intialState = {
  noOfCakes: 200
}

function cakeReducer(state = intialState, action) {
  switch (action.type) {
    case BUYCAKE:
      return {
        noOfCakes: state.noOfCakes - 1
      }
      break;
    case SELLCAKE:
      return {
        noOfCakes: state.noOfCakes + 1
      }
      break;
    default:
      return state
      
  }
}

export default cakeReducer