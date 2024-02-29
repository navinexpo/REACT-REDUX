import { PRODUCT_LIST } from "./constant";

export const productList = () => {
  let data = "Hello Product";
  console.log("product action is called --> ", data);
  return {
    type: PRODUCT_LIST,
    data,
  };
};
