import React from "react";
import Order from "./Order";
import { useNavigate } from "react-router-dom";
const OrderReview = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl m-auto px-2">
      <div class="card w-full bg-base-400 border my-5">
        <div className="px-8 mt-3">
          <button
            onClick={() => navigate("/chackout")}
            className="px-8 py-2 bg-red-500 text-white rounded-lg"
          >
            Back
          </button>
        </div>
        <div class="py-8 px-2">
          <ul class="progressBar ">
            <li class="active">Shipping</li>
            <li class="activ">Order</li>
            <li className="activ">Payment</li>
          </ul>
          <div className="mt-20">
            <Order></Order>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
