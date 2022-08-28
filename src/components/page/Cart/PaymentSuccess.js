import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartClear } from "../Futurecher/Slice/cartSlice";
import { clearShippingTotalCostDiscount } from "../Futurecher/Slice/shippingPriceSlice";
import { clearSubTotal } from "../Futurecher/Slice/SubTotalPriceSlice";
import SuccessMessage from "./SuccessMessage";

const PaymentSuccess = () => {
  const orderItems = useSelector((state) => state.cart.cart);
  const parseInfo = localStorage.getItem("ShippingInfo");
  const shippingInfo = JSON.parse(parseInfo);

  const user = localStorage.getItem("UserId");
  const subTotalPrice = parseInt(localStorage.getItem("SubTotalPrice"));
  const shippingPrice = parseInt(localStorage.getItem("ShippingPrice"));
  const totalPrice = parseInt(localStorage.getItem("TotalCost"));
  const discount = parseInt(localStorage.getItem("Discount"));

  const paymentId = Math.floor(100000000 + Math.random() * 900000000);
  const disPatch = useDispatch();

  const paymentInfo = {
    id: paymentId,
    status: "paid",
  };
  console.log(shippingInfo.name);
  useEffect(() => {
    const data = {
      shippingInfo,
      orderItems,
      user,
      paymentInfo,
      subTotalPrice,
      shippingPrice,
      totalPrice,
      discount: discount || 0,
    };

    fetch(`http://localhost:5000/order/new/${user}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.removeItem("SubTotalPrice");
          localStorage.removeItem("ShippingPrice");
          localStorage.removeItem("TotalCost");
          localStorage.removeItem("Discount");
          localStorage.removeItem("Cart");
          disPatch(cartClear());
          disPatch(clearShippingTotalCostDiscount());
          disPatch(clearSubTotal());
        }
      });
  }, []);
  return (
    <div className="max-w-7xl m-auto px-2">
      <div class="card w-full bg-base-400 border my-5">
        <div class="py-8 px-2">
          <ul class="progressBar ">
            <li class="active">Shipping</li>
            <li class="active">Order</li>
            <li className="active">Payment</li>
          </ul>
          <div className="mt-20">
            <SuccessMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
