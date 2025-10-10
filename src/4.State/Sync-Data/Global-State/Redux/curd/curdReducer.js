import { BUYCURD } from "./actionTypes";


var initialState = {
  noOfCurd : 50
}

function curdReducer(state=initialState, action) {
  switch (action.type) {
    case BUYCURD:
      return {
        noOfCurd: state.noOfCurd + 1
      }
      break;
    default: 
      return state
    
  }
}

export default curdReducer