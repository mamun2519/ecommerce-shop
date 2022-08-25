import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToShippingPrice } from "../Futurecher/Slice/SubTotalPriceSlice";

const CartSumary = () => {
  const cart = useSelector((state) => state.cart.cart);
 
  const subTotal = useSelector((state) => state.subTotal.subTotal);
  const selectRef = useRef()
  const [delivary , setDelivary] = useState()
  const disPatch = useDispatch();
  
 const selectDelivaryHendeler = (e)=>{
  setDelivary(e.target.value)

 }

 useEffect(()=>{
  const shippingPrice = parseInt(selectRef?.current?.value)
  localStorage.setItem("ShippingPrice", JSON.stringify(shippingPrice));
  //  disPatch(addToShippingPrice(shippingPrice))
 

 },[delivary])






  return (
    <div class="card w-full sticky top-0 bg-base-100 border shadow-xl">
      <div class="p-4">
        <div className="pb-4 border-b border-gray-100">
          <p className="font-semibold">Order Summary</p>
        </div>
        <div className=" flex justify-between mt-2">
          <span>ITMES {cart.length}</span>
          <span>{subTotal && subTotal} Tk</span>
        </div>
        <div className="mt-5">
          <p className="font-semibold">SHIPPING</p>
          <select
           ref={selectRef}
           onChange={(e)=> selectDelivaryHendeler(e)}
            class="w-full block  
  px-2 py-2   bg-slate-100 border rounded-md   outline-none  focus:border-blue-400 mt-2 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          >
            <option value={50} selected>Standard Delivary- 50 Tk</option>
            <option value={100} >Argent Delivary- 100 Tk</option>
            <option value={30}> Normal Delivary- 30 Tk</option>
          </select>
        </div>

        <div className="mt-5">
          <p className="font-semibold">PROMO CODE</p>
          <input
            type="number"
            placeholder="Enter Your Code"
            class="block w-full px-2 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          />
          {/* <p>text</p> */}

          <button className="px-8 mt-3 py-2 bg-red-400 rounded-lg text-white">
            APPLY
          </button>
        </div>

        <div className="pt-4 border-t border-gray-100 mt-8">
          <div className=" flex justify-between">
            <p className="font-semibold">TOTAL COST</p>
            <p className="font-semibold">680 BDT</p>
          </div>

          <div class="mt-6">
            <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-400 rounded-md">
              CheckOut{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSumary;