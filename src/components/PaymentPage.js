import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const paymentMethod = useSelector((store) => store.cart.paymentMethod?.paymentMethod);
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to order summary page
    // Add your actual payment logic here
    navigate("/ordersummary");
  }, [navigate]);

  return (
    <div className="container flex flex-col justify-around mob:flex-col">
      <div className="flex justify-center my-10">
        <div>{paymentMethod || 'Processing...'}</div>
      </div>
    </div>
  );
};

export default PaymentPage;
