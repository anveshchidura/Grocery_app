import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemQuantity from "./ItemQuantity";
import CartFallback from "../components/CartFallback";
import useItemTotal from "../utils/useItemTotal";
import { AccountFallback } from "./AccountFallback";
import { UserAuth } from "../utils/context/AuthContext";
import { Link } from "react-router-dom";
import { isEmptyObject } from "../utils/helper";
import { database } from "../utils/firebase";
import { ref, set } from "firebase/database";

const Cart = () => {
  const { user } = UserAuth();
  const cartItems = useSelector((store) => store.cart.items);
  const address = useSelector((store) => store.cart.deliveryAddress);
  const payment = useSelector((store) => store.cart.paymentMethod);
  const dispatch = useDispatch();
  const getItemTotal = useItemTotal();

  const handleClearCart = () => dispatch(clearCart());

  const fbpush = () => {
    if (user && !isEmptyObject(cartItems) && !isEmptyObject(address)) {
      const userCartRef = ref(database, 'users/' + user.displayName + '/cart');
      const userAddressRef = ref(database, 'users/' + user.displayName + '/address');
      
      set(userCartRef, cartItems)
        .then(() => set(userAddressRef, address))
        .catch((error) => alert("Error updating data: " + error.message));
    }
  };

  const renderCartItems = () => (
    Object.values(cartItems).map((item) => (
      <div className="my-3" key={item.id}>
        <div className="flex items-center mt-2">
          <p className="px-2 w-48 text-sm">{item.name}</p>
          <div className="px-5">
            <ItemQuantity item={item} />
          </div>
          <p className="font-thin text-sm">{"₹ " + (item.price / 100) * item.quantity}</p>
        </div>
      </div>
    ))
  );

  const renderCheckoutDetails = () => (
    <>
      <div className="border border-black my-2"></div>
      {!isEmptyObject(address) && renderAddressDetails()}
      {!isEmptyObject(payment) && renderPaymentDetails()}
      <div className="flex justify-center my-10">
        <Link to="/payment">
          <button onClick={fbpush} className="bg-yellow px-4 py-2 text-blue-dark hover:drop-shadow-lg backdrop-blur">
            PROCEED TO PAYMENT
          </button>
        </Link>
      </div>
    </>
  );

  const renderAddressDetails = () => (
    <div className="flex flex-col justify-between my-2">
      <h1 className="text-lg mt-2.5 text-title font-bold ">Delivery Address</h1>
      <h2 className="font-semibold mt-2.5 text-title text-base">{address.addressType}</h2>
      <p className="text-sm text-bio text-ellipsis">{address.addressDescription}</p>
    </div>
  );

  const renderPaymentDetails = () => (
    <div className="flex flex-col justify-between mb-2">
      <h1 className="text-lg mt-2.5 text-title font-bold ">Payment</h1>
      <h2 className="font-semibold mt-2.5 text-title text-base">{payment.paymentType}</h2>
      <p className="text-sm text-bio text-ellipsis">{payment?.paymentMethod}</p>
    </div>
  );

  return Object.values(cartItems).length > 0 ? (
    <div className="flex mt-5 mx-6 p-20 justify-between sm:p-0 xsm:p-0 mob:p-0 sm:flex-col xsm:flex-col mob:flex-col">
      <div className="lg:w-[60%] md:w-[60%] xl:w-[60%]">
        <AccountFallback />
      </div>

      <div className="bg-white drop-shadow-md flex-2 p-6 w-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-lg mt-2.5 text-title font-bold ">Cart Items</h1>
          <button className="w-[80px] h-[22px] rounded-md bg-red text-white text-sm" onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
        {renderCartItems()}
        <div className="border border-black my-2"></div>
        <div className="flex justify-between">
          <p className="font-bold text-sm">To Pay</p>
          <p className="font-bold text-sm">{"₹ " + getItemTotal()}</p>
        </div>
        {user && renderCheckoutDetails()}
      </div>
    </div>
  ) : (
    <div className="container mx-auto">
      <CartFallback text="Your cart is empty!" btnText="SEE STORES NEAR YOU" />
    </div>
  );
};

export default Cart;
