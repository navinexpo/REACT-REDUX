// for multiple cases can use if-else statement
// for various and bulk condition, can use switch-case statement.
// It call automiatically

import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  // if (action.type === ADD_TO_CART) {
  // console.log("Reducer Called -->  ", action)

  //     // some logic
  //     return action.data
  // } else {
  //     return "no action called"
  // }

  switch (action.type) {
    case ADD_TO_CART:
      //add cart logic
      console.log("Reducer called --> ", action);
      return [action.data, ...data];

    default:
      //no case matched
      return [];
  }
};
