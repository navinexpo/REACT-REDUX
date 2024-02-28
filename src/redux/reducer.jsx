import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

const initialState = {
  cartData: [],
};

export const cartData = (data = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART condition ", action);
      return [action.data, ...data];

    case EMPTY_CART:
      console.log("EMPTY CART condition ", action);
      data = [];
      return [...data];

    case REMOVE_FROM_CART:
      console.log("Remove cart-->", action);
      const updatedCartData = data.cartData
        .map((i) => {
          if (i === action.data) {
            return undefined;
          }
          return i;
        })
        .filter((i) => i !== undefined);
      return {
        ...data,
        cartData: updatedCartData,
      };

    default:
      return [];
  }
};
