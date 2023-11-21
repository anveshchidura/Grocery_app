import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const MenuItem = ({ item }) => {
  const { id, name, description, price, imageId } = item;

  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cart.items[id]?.quantity || 0);

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = () => {
    if (itemCount > 0) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="flex justify-between basis-[848px] max-h-[180px] p-5 border-b border-gray">
      <div className="flex flex-col basis-[400px]">
        <h3 className="font-bold text-lg w-3/5">{name}</h3>
        <p className="mt-1 text-base font-normal">₹ {price / 100}</p>
        <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden">
          {description}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
        {imageId && (
          <img
            className="w-[118px] h-[96px]"
            src={'https://cdn-icons-png.flaticon.com/512/5016/5016804.png'}
            alt={name}
          />
        )}
        <div className="flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray">
          <button
            className="text-xl text-gray-count font-semibold"
            onClick={handleRemoveItem}
          >
            -
          </button>
          <span className="text-base text-green">{itemCount}</span>
          <button
            className="text-green text-xl"
            onClick={handleAddItem}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
