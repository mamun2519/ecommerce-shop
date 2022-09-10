import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartClear } from '../Futurecher/Slice/cartSlice';
import { clearShippingTotalCostDiscount } from '../Futurecher/Slice/shippingPriceSlice';
import { clearSubTotal } from '../Futurecher/Slice/SubTotalPriceSlice';
import axios from 'axios'
const SuccessMessage = () => {
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
  useEffect( () => {
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

   
   
    fetch(`https://boiling-mesa-36077.herokuapp.com/order/new/${user}`, {
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
            <div className="card lg:w-2/3 w-full  m-auto  border p-3">
            <div class="">
              <div class="p-2 flex justify-center">
               
                 <div>
                <div className='flex justify-center'> <img  className='w-60' src="/Assist/picture/paymenSuccess.gif" alt="" /></div>
               <p className='lg:text-2xl text-xl text-center'>Congraculation Your Payment SuccessFull</p>
               <div className='text-center mt-3'>
               <button  className='px-6 bg-[#062C30] rounded-lg py-2 text-white'>Go DashBoard</button>
               </div>
                 </div>
              </div>
            </div>
          </div>
      );
};

export default SuccessMessage;