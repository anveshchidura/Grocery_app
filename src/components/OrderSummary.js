import React from 'react';
import { useSelector } from 'react-redux';
import useItemTotal from '../utils/useItemTotal';

const OrderSummary = () => {
  const { items: cartItems, deliveryAddress, paymentMethod } = useSelector((store) => store.cart);
  const getItemTotal = useItemTotal();

  const renderItem = (item) => (
    <div className="my-3" key={item.id}>
      <div className="flex items-center mt-2 justify-center">
        <p className="px-2 w-48 text-sm">{item.name}</p>
        <div className="px-5">{item.quantity}</div>
        <p className="font-thin text-sm">{"₹ " + (item.price / 100) * item.quantity}</p>
      </div>
    </div>
  );

  return (
    <div className="flex container mx-auto items-center justify-center">
      <div className="flex flex-col bg-white drop-shadow-md flex-2 p-6 w-[500px] items-center">
        <h1 className="text-lg mt-2.5 text-title font-bold mb-2">Order Summary</h1>
        <div className="flex flex-col w-[400px] justify-center border border-solid border-gray p-10">
          {Object.values(cartItems).map(renderItem)}
          <div className="border border-black my-2"></div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-sm ml-8">Paid</p>
            <p className="font-bold text-sm mr-5">{"₹ " + getItemTotal()}</p>
          </div>
        </div>
        <div className="flex justify-around w-[400px] gap-10 border border-solid border-gray">
          <div className="flex flex-col justify-between mb-2">
            <h1 className="text-base mt-2.5 text-title font-semibold">Delivery Address</h1>
            <h2 className="font-semibold mt-2.5 text-title text-sm">{deliveryAddress?.addressType}</h2>
            <p className="text-sm text-bio text-ellipsis">{deliveryAddress?.addressDescription}</p>
          </div>
          <div className="flex flex-col justify-between mb-2">
            <h1 className="text-base mt-2.5 text-title font-semibold">Payment</h1>
            <h2 className="font-semibold mt-2.5 text-title text-sm">{paymentMethod?.paymentType}</h2>
            <p className="text-sm text-bio text-ellipsis">{paymentMethod?.paymentMethod}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
