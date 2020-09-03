import React from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { REMOVE, INCREMENT, DECREMENT } from "../../store/slices/cartSlice";
//types
import { productStateType } from "../../Types/ProductState_TYPE";
//icon
import Ximage from "../../assets/images/X.png";

interface productsType {
  products: productStateType[];
}
const CartProducts = () => {
  const { products } = useSelector((state: productsType) => state);
  const filteredProducts = products.filter(
    (product: productStateType) => product.added === true
  );
  const dispatch = useDispatch();
  console.log(products);
  return (
    <div>
      <section className="text-gray-500 bg-gray-900 h-screen body-font ">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-5xl text-center text-white font-semibold pb-12">
            Cart
          </h1>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">
                    Product
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                    Quantity
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                    Price
                  </th>

                  <th className="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(
                  (product: productStateType, i: number) => (
                    <tr key={i}>
                      <td className="px-4 py-3">{product.shoeName}</td>
                      <td className="px-4 py-3">
                        <span
                          className="px-3 bg-gray-800 mx-2 rounded text-xs py-1 hover:bg-gray-700 cursor-pointer"
                          onClick={() => dispatch(DECREMENT(product.id))}
                        >
                          -
                        </span>
                        {product.count}{" "}
                        <span
                          className=" px-3 bg-gray-800 mx-2 rounded text-xs py-1 hover:bg-gray-700 cursor-pointer"
                          onClick={() => dispatch(INCREMENT(product.id))}
                        >
                          +
                        </span>
                      </td>
                      <td className="px-4 py-3">{product.price}rs </td>
                      <td className="px-4 py-3 w-20 text-lg text-white flex justify-center">
                        <span onClick={() => dispatch(REMOVE(product.id))}>
                          <img
                            src={Ximage}
                            className="w-8 h-8 rounded-full cursor-pointer"
                            alt="x icon"
                          />
                        </span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
              Go Back
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>

            <div className="flex ml-auto px-8 bg-gray-800 py-3 rounded">
              Total: 1000$
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartProducts;
