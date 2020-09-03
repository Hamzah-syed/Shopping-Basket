import React from "react";

//components
import Products from "../components/home/products";
import CartButton from "../components/cart/cartButton";

const Home = () => {
  return (
    <div className="relative">
      <CartButton />

      <Products />
    </div>
  );
};

export default Home;
