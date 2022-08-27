import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const cart = useSelector((state) => state.cart.cart);
  const subtotal = useSelector((state) => state.subTotal.subTotal);
  const shipping = useSelector((state) => state.shipping.shipping);
  const totalCost = useSelector((state) => state.shipping.totalCost);
  const discount = useSelector((state) => state.shipping.discount);
  const navigate = useNavigate();
  return (
    <div className="card lg:w-2/3 w-full m-auto  border p-3">
      <div class="">
        <div class="p-2">
          <div className="pb-4 border-b border-gray-100">
            <p className="font-semibold text-center">Order Review</p>
          </div>
          
          <div>
            <p className="mt-2 font-semibold ">Order Item</p>
            <div className="mt-3">
              {cart &&
                cart.map((myCart) => (
                  <div className="grid grid-cols-3 mt-1 " key={myCart.id}>
                    <span className="">{myCart.name}</span>
                    <span className="text-center">{myCart.quentity} PSC</span>
                    <span className="text-end">{myCart.price} BDT</span>
                  </div>
                ))}
              <div className="pb-4 border-b border-gray-100"></div>
              <div className=" flex justify-between mt-2">
                <span>Total Product Price</span>
                <span>{subtotal} BDT</span>
              </div>
              <div className=" flex justify-between mt-2">
                <span>Shipping Charge</span>
                <span>{shipping} BDT</span>
              </div>
              <div className="pb-4 border-b border-gray-100"></div>
              <div className=" flex justify-between mt-1">
                <span>Total Amount</span>
                <span>{subtotal + shipping} BDT</span>
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-sm">Discount</p>
                <p className="text-sm text-red-500">{discount} BDT</p>
              </div>
            </div>
          </div>
          <div className="pb-4 border-b border-gray-100"></div>
          <div className=" mt-2">
            <div className="flex justify-between">
              <p className="font-semibold">TOTAL COST</p>
              <p className="font-semibold">{totalCost} BDT</p>
            </div>

            <div class="mt-6 text-center">
              <button
                onClick={() => navigate("/chackout/orderReview/payment")}
                class="w-1/2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-400 rounded-md"
              >
                Confrom Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
