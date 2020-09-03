import React from "react";
//cart icon
import Cart from "../../assets/images/shopping-cart.png";
//redux
import { useSelector } from "react-redux";
//type
import { productStateType } from "../../Types/ProductState_TYPE";

interface productsType {
  products: productStateType[];
}
const CartButton = () => {
  const { products } = useSelector((state: productsType) => state);
  const filteredDataLength = products.filter(
    (product) => product.added === true
  ).length;
  console.log(filteredDataLength);

  return (
    <div className="fixed bottom-0 right-0 m-12 bg-white rounded-full text-white p-3 shadow-lg cursor-pointer">
      <div
        className="absolute top-0 p-2 bg-blue-700 rounded-full text-white h-6 w-6 text-xs flex justify-center items-center right-0"
        style={{ top: "-6px", right: "-6px" }}
      >
        <span className="animate-ping absolute  h-5 w-5 rounded-full bg-indigo-400 opacity-50"></span>
        {filteredDataLength}
      </div>
      <img src={Cart} alt="cart" className="w-8 h-8" />
    </div>
  );
};

export default CartButton;
