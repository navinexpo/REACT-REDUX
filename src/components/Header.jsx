import React from "react";
import { useSelector } from "react-redux";
import { HiMiniShoppingCart } from "react-icons/hi2";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log("Redux State from useSelector called --> ", result);

  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.length}</span>
        <HiMiniShoppingCart className="image" />
      </div>
    </div>
  );
};

export default Header;
