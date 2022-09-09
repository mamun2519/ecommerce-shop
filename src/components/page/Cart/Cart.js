import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToSbTotal } from "../Futurecher/Slice/SubTotalPriceSlice";
import CartRow from "./CartRow";
import CartSumary from "./CartSumary";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart)
  const disPatch = useDispatch();
  useEffect(()=>{
    disPatch(addToSbTotal(cart))

  },[cart])
 
  return (
    <div className="max-w-7xl m-auto px-4 mt-10">
      <div class="">
        <div class="">
          <div className=" grid gird-cols-1 lg:grid-cols-3 gap-5">
            <div className=" lg:col-span-2 ">
              <section class="antialiased  text-gray-600" x-data="app">
                <div class="flex flex-col justify-center h-full">
                  <div class="lg:w-full w-[375px] bg-white shadow-md rounded-xl border border-gray-200">
                    <header class="px-5 py-4 border-b border-gray-100">
                      <div class="font-semibold flex   justify-between text-gray-800">
                        <p>Shopping Cart</p>
                        <p>{cart.length} Items</p>
                      </div>
                    </header>

                    <div class="block w-full overflow-x-auto p-3">
                      <table class=" items-center bg-transparent w-full border-collapse">
                        <thead class="text-xs font-semibold uppercase  bg-[#062C30] text-white">
                          <tr className="">
                            <th>Picture</th>
                            <th class="p-2">
                              <div class="font-semibold text-left">
                                Product Name
                              </div>
                            </th>
                            <th class="p-2">
                              <div class="font-semibold text-left">
                                Quantity
                              </div>
                            </th>
                            <th class="p-2">
                              <div class="font-semibold text-left">Price</div>
                            </th>
                            <th class="p-2">
                              <div class="font-semibold text-left">
                                Total Price
                              </div>
                            </th>
                            <th class="p-2">
                              <div class="font-semibold text-center">
                                Action
                              </div>
                            </th>
                          </tr>
                        </thead>

                        <tbody class="text-sm divide-y divide-gray-100">
                         {cart && cart.map((myCart) => <CartRow
                         key={myCart.id}
                         cart={myCart}
                         
                         ></CartRow>)}
                         

                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div>
              <CartSumary></CartSumary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
