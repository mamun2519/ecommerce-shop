import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToShippingPrice, calculatetTotalTotalCost, promoDiscount } from "../Futurecher/Slice/shippingPriceSlice";
import {useNavigate} from 'react-router-dom'

const CartSumary = () => {
  const cart = useSelector((state) => state.cart.cart);
  const subTotal = useSelector((state) => state.subTotal.subTotal);
  const shippingPrice = useSelector((state) => state.shipping.shipping);
  const totalCost = useSelector((state) => state.shipping.totalCost);
  const discount = useSelector((state) => state.shipping.discount);
  const selectRef = useRef()
  const [delivary , setDelivary] = useState()
  const disPatch = useDispatch();
  const [promoCode , setPromoCode] = useState("")
  const navigate = useNavigate()
  
 const selectDelivaryHendeler = (e)=>{
  setDelivary(e.target.value)

 }

 
  


  const applayPromoCodeHendeler = () =>{
    fetch(`http://localhost:5000/order/promo/?totalCost=${totalCost}&code=${promoCode}`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
})
  .then((res) => res.json())
  .then((data) => {
    if(data.success){
      disPatch(promoDiscount(data.discountPrice))
      setPromoCode("")
    }
    else{
      alert("sorry")
    }
  });
  }
  

  useEffect(()=>{
    const shippingPrice = parseInt(selectRef?.current?.value)
     disPatch(addToShippingPrice(shippingPrice))
     disPatch(calculatetTotalTotalCost(subTotal))
     setPromoCode("")
   
  
   },[delivary , shippingPrice , cart , subTotal ])
  return (
    <div class="card w-full sticky top-0 bg-base-100 border shadow-md ">
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
          onChange={(e)=> setPromoCode(e.target.value)}
            type="number"
            placeholder="Enter Your Code"
            class="block w-full px-2 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          />
          {discount ? <label className="px-1 text-sm text-red-500" htmlFor="">congaculation you have 20% Descount.Happy Shopping</label>
          :
          <label className="px-1 text-sm text-red-500" htmlFor="">Use Promo code 20% Discount</label>}
          
          {/* <p>text</p> */}

         <div>
         <button  disabled={discount} onClick={()=>applayPromoCodeHendeler()} className={discount? "px-8 mt-3 py-2 bg-red-200 rounded-lg text-white": "px-8 mt-3 py-2 bg-[#062C30] rounded-lg text-white"}>
            APPLY
          </button>
         </div>
        </div>

        <div className="pt-4 border-t border-gray-100 mt-8">
          <div className=" ">
            {discount > 0 && <div className="flex justify-between mb-2">
              <p className="text-sm">Discount</p>
            <p className="text-sm">{discount} BDT</p>
            </div>}
           <div className="flex justify-between"> 
           <p className="font-semibold">TOTAL COST</p>
            <p className="font-semibold">{totalCost} BDT</p>
           </div>
          </div>

          <div class="mt-6">
            <button
            onClick={()=>navigate('/chackout')}
             class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#062C30] rounded-md">
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSumary;
