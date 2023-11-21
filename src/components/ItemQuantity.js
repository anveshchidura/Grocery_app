import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemQuantity = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem(item));
  };

  const handleRemove = () => {
    if (item.quantity > 0) {
      dispatch(removeItem(item.id));
    }
  };

  return (
    <div className="flex border border-gray w-16 justify-around items-center">
      <button
        onClick={handleRemove}
        className="text-xl"
      >
        -
      </button>
      <p className="text-green text-sm">{item.quantity}</p>
      <button
        onClick={handleAdd}
        className="hover:scale-110 delay-100 transition-all "
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantity;
