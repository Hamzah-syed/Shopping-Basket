import React from "react";
import { useSelector, useDispatch } from "react-redux";
//type
import { productStateType } from "../../Types/ProductState_TYPE";
import { ADD } from "../../store/slices/cartSlice";

interface productsType {
  products: productStateType[];
}
const Products = () => {
  const { products } = useSelector((state: productsType) => state);
  const dispatch = useDispatch();
  console.log(products);
  return (
    <div>
      <section className="text-gray-500 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            {products.map((product: productStateType, i: number) => (
              <div className="xl:w-1/4 md:w-1/2 p-4" key={i}>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex  justify-center w-full ">
                    <img
                      className="h-48 rounded w-48 object-center mb-6"
                      src={String(product.image)}
                      alt="content"
                    />
                  </div>
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SHOE
                  </h3>
                  <h2 className="text-lg text-white font-medium title-font mb-2">
                    {product.shoeName}
                  </h2>
                  <p className="leading-relaxed text-base">{product.price}rs</p>
                  <div className="pt-3">
                    <button
                      className="py-1 px-3 focus:outline-none hover:bg-indigo-700  rounded bg-indigo-600 text-white"
                      onClick={() => dispatch(ADD(product))}
                    >
                      {" "}
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
