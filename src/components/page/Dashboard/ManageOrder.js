import React, { useEffect, useState } from 'react';
import Pagination from '../Product/Pagination';
import { useSelector, useDispatch } from "react-redux";
import { fetchManageOrder } from '../Futurecher/Slice/manageOrderSlice';
import Loading from '../Utilitis/Loading';
import ManageOrderRow from './ManageOrderRow';
import ManageOrderPag from '../Pagination/ManageOrderPag';
const ManageOrder = () => {
      const disPatch = useDispatch();
      const orders = useSelector((state) => state.orders);
      useEffect(()=>{
            disPatch(fetchManageOrder())
      },[])
     
      return (
            <div>
                   <section class="py-1 bg-blueGray-50">
        <div class="w-full  mb-12 xl:mb-0 px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md border rounded ">
            <div class="rounded-t mb-0 px-2 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full p2-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-blueGray-700">
                   Manage All Order
                  </h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                
                </div>
              </div>
            </div>

            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr className="bg-[#062C30] text-white sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     Name
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Quentity
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     Price
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Payment Status
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Order Status
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Order Shipped
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                {orders.loading && <Loading></Loading>}
            {!orders.loading && orders.error ? <p>{orders.error}</p> : ""}
            {!orders.loading && !orders.error ? (
              <>
                {orders?.orders?.orders?.map((order) => (
                  <ManageOrderRow key={order._id} order={order}></ManageOrderRow >
                ))}
              </>
            ) : null}
                  
                  
                </tbody>
              </table>
            </div>
            <div class="rounded-t mb-0 px-2 py-3 border-t">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full p2-4 max-w-full  flex justify-center">
                  <h3 class="font-semibold text-base text-blueGray-700">
                  <ManageOrderPag></ManageOrderPag>
                  
                  </h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
            </div>
      );
};

export default ManageOrder;