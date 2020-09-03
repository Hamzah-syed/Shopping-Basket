import React from "react";

const CartButton = () => {
  return (
    <div className="w-full h-screen  fixed z-100">
      <div className="absolute bottom-0 right-0 m-12 bg-indigo-600 rounded-full text-white p-4">
        <div className="absolute bg-indigo-200 rounded-full text-white  top-0 right-0 text-xs">
          2
        </div>
      </div>
    </div>
  );
};

export default CartButton;
