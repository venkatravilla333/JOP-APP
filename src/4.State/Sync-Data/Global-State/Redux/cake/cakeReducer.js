import { BUYCAKE, SELLCAKE } from "./actionTypes";



var intialState = {
  noOfcakes: 200
}

function cakeReducer(state = intialState, action) {
  switch (action.type) {
    case BUYCAKE:
      return {
        noOfcakes: state.noOfcakes - 1
      }
      break;
    case SELLCAKE:
      return {
        noOfcakes: state.noOfcakes + 1
      }
      break;
    default:
      return state
      
  }
}

export default cakeReducer