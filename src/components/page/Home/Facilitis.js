import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdPayment } from "react-icons/md";
const Facilitis = () => {
  return (
    <div className="grid lg:grid-cols-4 max-w-7xl m-auto px-2 my-10 gap-5 grid-cols-1 ">
      <div data-aos="flip-left" data-aos-duration="1500">
        <div className="border shadow-md rounded-lg py-6 flex justify-center gap-5">
          <div className=" flex items-center">
            <span className="text-4xl">
              <GiTakeMyMoney />
            </span>
          </div>
          <div>
            <h2 className=" font-medium ">Money Back Guarantee</h2>
            <p>Any back within 30 days</p>
          </div>
        </div>
      </div>
      <div data-aos="flip-left" data-aos-duration="1500">
        <div className="border shadow-md rounded-lg py-6 flex justify-center gap-5">
          <div className=" flex items-center">
            <span className="text-4xl pr-5 text-[#EC255A]">
              <MdOutlineSupportAgent />
            </span>
          </div>
          <div>
            <h2 className=" font-medium">Customer Support</h2>
            <p>Call or email us 24/7</p>
          </div>
        </div>
      </div>
      <div data-aos="flip-left" data-aos-duration="1500">
        <div className="border shadow-md rounded-lg py-6 flex justify-center gap-5">
          <div className=" flex items-center">
            <span className="text-4xl">
              <MdOutlineLocalShipping />
            </span>
          </div>
          <div>
            <h2 className=" font-medium">Free Shipping & Returns</h2>
            <p>For all orders over $99</p>
          </div>
        </div>
      </div>
      <div data-aos="flip-left" data-aos-duration="1500">
        <div className="border shadow-md rounded-lg py-6 flex justify-center gap-5">
          <div className=" flex items-center">
            <span className="text-4xl text-[#EC255A]">
              <MdPayment />
            </span>
          </div>
          <div>
            <h2 className=" font-medium">Secure Payment</h2>
            <p>We ensure secure payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilitis;
