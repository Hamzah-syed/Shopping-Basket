import React from "react";
//retriving data from redux store
import { useSelector } from "react-redux";
import { productStateType } from "../Types/ProductState_TYPE";

const Home = () => {
  const products = useSelector((state: productStateType[]) => state);
  return (
    <div>
      {products.map((product) => (
        <h1>a</h1>
      ))}
      <h1>Home</h1>
    </div>
  );
};

export default Home;
