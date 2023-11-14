import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
}

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });
  

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:3001/payment/", {
          amount: 1000,
          id
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
          navigate('/ordersummary');
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  }
  const handlePay = () => {
    navigate('/ordersummary');
  }; 
  return (
    <div className="container mx-auto mt-8 p-4">
      {!success ? 
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Card Details</label>
            <CardElement options={CARD_OPTIONS} className="p-2 border border-gray-300 rounded" />
          </div>
          <button className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue" type="submit" onClick={handlePay} >Pay Now</button>
        </form>
        :
        <div className="max-w-md mx-auto bg-green-100 p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold text-green-800">Payment Done!</h2>
        </div>
      }
    </div>
  );
}

export default PaymentForm;
