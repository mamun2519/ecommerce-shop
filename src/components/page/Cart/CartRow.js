import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteToCart } from '../Futurecher/Slice/cartSlice';

const CartRow = ({cart}) => {
  const disPatch = useDispatch();
  const [calculatePrice , setCalculatePrice] = useState([])
  const {name , images , price , totalPrice , quentity , id} = cart
 

  
      
      console.log(calculatePrice)

      const deleteCartItem = () =>{
         disPatch(deleteToCart(id))
      }
      return (
            <tr >
            <td class="p-2 ">
              <div class="avatar ">
                <div class="w-16 rounded-xl">
                  <img src={images} />
                </div>
              </div>
            </td>
            <td class="p-2 ">
              <div class="font-medium text-gray-800 ">
                {name}
              </div>
            </td>
            <td class="p-2">
              <div class="text-left">{quentity}</div>
            </td>
            <td class="p-2">
              <div class="text-left font-medium text-green-500">
                { price} $
              </div>
            </td>
            <td class="p-2">
              <div class="text-left font-medium text-green-500">
                {totalPrice} $
              </div>
            </td>
            <td class="p-2">
              <div class="flex justify-center">
                <button onClick={()=>deleteCartItem()}>
                  <svg
                    class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
      );
};

export default CartRow;