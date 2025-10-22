import { BUYCAKE, SELLCAKE } from "./actionTypes"


export function buyCake() {
  return {
    type: BUYCAKE
  }
}
export function sellCake() {
  return {
    type: SELLCAKE
  }
}