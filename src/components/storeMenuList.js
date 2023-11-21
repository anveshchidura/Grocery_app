import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useItemTotal from "../utils/useItemTotal";
import StoreItemCategory from "./storeItemCategory";
import StoreNestedItemCategory from "./storeNestedItemCategory";
import CartFallback from "./CartFallback";
import ItemQuantity from "./ItemQuantity";

const StoreMenuList = ({ menu }) => {
  const cartItems = useSelector((store) => store.cart.items);
  const getItemTotal = useItemTotal();

  const renderMenuItems = () => {
    return menu.map((item, index) => (
      <div key={index}>
        {item.categories ? (
          <StoreNestedItemCategory nestedCategory={item} />
        ) : (
          <StoreItemCategory itemCategory={item} />
        )}
      </div>
    ));
  };

  const renderCartItems = () => {
    return Object.values(cartItems).map((item) => (
      <div key={item.id} className="flex items-center mt-2 justify-between">
        <p className="w-40 text-sm">{item.name}</p>
        <div className="w-30 px-5">
          <ItemQuantity item={item} />
        </div>
        <p className="w-10 font-thin text-sm">
          {"₹ " + (item.price / 100) * item.quantity}
        </p>
      </div>
    ));
  };

  return (
    <div className="flex justify-center sm:flex-col xsm:flex-col mob:flex-col">
      <div className="mt-7 xl:w-[70%] lg:w-[70%] md:w-[70%] card-container">
        {renderMenuItems()}
      </div>

      <div className="basis-[30%]">
        {Object.keys(cartItems).length > 0 ? (
          <div className="card-container basis-[298px] p-10">
            <h1 className="font-bold text-lg mt-2.5">Cart</h1>
            <p className="text-gray-count">{Object.keys(cartItems).length} item</p>
            {renderCartItems()}
            <div className="border border-gray my-4"></div>
            <div className="flex justify-between mt-4">
              <p className="text-sm text-bio">Sub Total</p>
              {"₹ " + getItemTotal()}
            </div>
            <div className="flex justify-center mt-10">
              <Link to="/cart">
                <button className="bg-yellow px-4 py-2 text-blue-dark hover:drop-shadow-lg backdrop-blur">
                  CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="card-container w-[348px]">
            <CartFallback text="Add items to the cart and order groceries from nearby stores!" />
          </div>
        )}
      </div> 
    </div>
  );
}

export default StoreMenuList;
