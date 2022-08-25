import React from "react";
import { useSelector } from "react-redux";
import CartRow from "./CartRow";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart)
  console.log(cart);
  return (
    <div className="max-w-7xl m-auto px-2 mt-10">
      <div class="">
        <div class="">
          <div className=" grid gird-cols-1 lg:grid-cols-3 gap-5">
            <div className=" col-span-2 ">
              <section class="antialiased  text-gray-600" x-data="app">
                <div class="flex flex-col justify-center h-full">
                  <div class="w-full  bg-white shadow-lg rounded-xl border border-gray-200">
                    <header class="px-5 py-4 border-b border-gray-100">
                      <div class="font-semibold flex   justify-between text-gray-800">
                        <p>Shoping Cart</p>
                        <p>{cart.length} Items</p>
                      </div>
                    </header>

                    <div class="overflow-x-auto p-3">
                      <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
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
              <div class="card w-full sticky top-0 bg-base-100 border shadow-xl">
                <div class="p-4">
                  <div className="pb-4 border-b border-gray-100">
                    <p className="font-semibold">Order Summary</p>
                  </div>
                  <div className=" flex justify-between mt-2">
                    <span>ITMES {cart.length}</span>
                    <span>450 Tk</span>
                  </div>
                  <div className="mt-5">
                    <p className="font-semibold">SHIPPING</p>
                    <select
                      class="w-full block  
      px-2 py-2   bg-slate-100 border rounded-md   outline-none  focus:border-blue-400 mt-2 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
                    >
                      <option selected>Select language</option>
                      <option>English</option>
                      <option>Japanese</option>
                      <option>Italian</option>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
