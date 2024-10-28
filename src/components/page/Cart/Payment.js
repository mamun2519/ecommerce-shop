import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useDispatch, useSelector } from "react-redux";
import { addToSecretClient } from "../Futurecher/Slice/clientScritSlice";
import PageTitle from "../Utilitis/PageTitle";
const stripePromise = loadStripe(
  "pk_test_51L1nmNCGpaTt0RU8npNSNITrjLTAUDjwjX275RD6RDk5SGoYi1H1zLKxAis8OFp4C0PxQBT2L5c0L0VsTI9ewqGl00dT2UHEXy"
);

const Payment = () => {
  const navigate = useNavigate();

  const clientSecret = useSelector((state) => state.clientSecret.clientSecret);
  const disPatch = useDispatch();
  const totalPrice = parseInt(localStorage.getItem("TotalCost"));

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
<<<<<<< HEAD
    fetch("http://localhost:5000/order/create-payment-intent", {
=======
    fetch("http://207.244.230.118:5000/order/create-payment-intent", {
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("UserToken")}`,
      },
      body: JSON.stringify({ price: totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => disPatch(addToSecretClient(data.clientSecrets)));
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="max-w-7xl m-auto px-2">
      <PageTitle title="Payment"></PageTitle>
      <div class="card w-full bg-base-400 border my-5">
        <div class="py-8 px-2">
          <ul class="progressBar ">
            <li class="active">Shipping</li>
            <li class="active">Order</li>
            <li className="activ">Payment</li>
          </ul>
          <div data-aos="fade-up" data-aos-duration="1000" className="mt-20">
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            )}
          </div>
        </div>

        <div className="px-4 lg:px-8 my-5">
          <button
            onClick={() => navigate("/chackout/orderReview")}
            className="px-8 py-2 bg-[#062C30]  text-white rounded-lg"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
