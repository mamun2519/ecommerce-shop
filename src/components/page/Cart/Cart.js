import React from "react";

const Cart = () => {
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
                        <p>3 Items</p>
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
                          <tr>
                            <td class="p-2">
                              <div class="avatar">
                                <div class="w-16 rounded-xl">
                                  <img src="https://placeimg.com/192/192/people" />
                                </div>
                              </div>
                            </td>
                            <td class="p-2">
                              <div class="font-medium text-gray-800">
                                Samsung Galaxy Note 4
                              </div>
                            </td>
                            <td class="p-2">
                              <div class="text-left">1</div>
                            </td>
                            <td class="p-2">
                              <div class="text-left font-medium text-green-500">
                                RM 2,890.66
                              </div>
                            </td>
                            <td class="p-2">
                              <div class="flex justify-center">
                                <button>
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

                          <tr>
                            <td class="p-2">
                              <input
                                type="checkbox"
                                class="w-5 h-5"
                                value="id-2"
                              />
                            </td>
                            <td class="p-2">
                              <div>
                                <div class="font-medium text-gray-800">
                                  Logitech Keyboard
                                </div>
                              </div>
                            </td>
                            <td class="p-2">
                              <div class="text-left">1</div>
                            </td>
                            <td class="p-2">
                              <div class="text-left font-medium text-green-500">
                                RM 120.50
                              </div>
                            </td>
                            <td class="p-2">
                              <div class="flex justify-center">
                                <button>
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

                          <tr>
                            <td class="p-2">
                              <input
                                type="checkbox"
                                class="w-5 h-5"
                                value="id-3"
                              />
                            </td>
                            <td class="p-2">
                              <div>
                                <div class="font-medium text-gray-800">
                                  Earphone
                                </div>
                              </div>
                            </td>
                            <td class="p-2">
                              <div class="text-left">1</div>
                            </td>
                            <td class="p-2">
                              <div class="text-left font-medium text-green-500">
                                RM 15.00
                              </div>
                            </td>
                            <td class="p-2">
                              <div class="flex justify-center">
                                <button>
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
                    <span>ITMES 5</span>
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
