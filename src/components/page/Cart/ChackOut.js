import React from "react";
import Shipping from "./Shipping";

const ChackOut = () => {
  return (
    <div className="max-w-7xl m-auto px-2">
      <div class="card w-full bg-base-400 border my-5">
        <div class="py-8  px-2">
          <ul class="progressBar ">
            <li class="">Shipping</li>
            <li class="activ">Order </li>
            <li className="activ">Payment</li>
          </ul>
          <div data-aos="fade-right"
          data-aos-duration="1000" className="mt-20">
            <Shipping></Shipping>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChackOut;
