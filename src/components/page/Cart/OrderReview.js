import React from "react";
import Order from "./Order";
import { useNavigate } from "react-router-dom";
const OrderReview = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl m-auto px-2">
      <div class="card w-full bg-base-400 border my-5">
     
        <div class="py-8 px-2">
          <ul class="progressBar ">
            <li class="active">Shipping</li>
            <li class="activ">Order</li>
            <li className="activ">Payment</li>
          </ul>
          <div data-aos="fade-left"
          data-aos-duration="1000" className="mt-20">
            <Order></Order>
          </div>
        </div>

        <div className="px-4 lg:px-8 my-5">
          <button
            onClick={() => navigate("/chackout")}
            className="px-8 py-2 bg-[#062C30]  text-white rounded-lg"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
