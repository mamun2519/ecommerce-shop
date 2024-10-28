import React, { useEffect, useState } from "react";
import OrderRow from "./OrderRow";
import ShowMessage from "./ShowMessage";

const Myorder = () => {
  const [myOrder, setMyOrder] = useState([]);
  const userId = localStorage.getItem("UserId");
  let [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
<<<<<<< HEAD
    fetch(`http://localhost:5000/order/myOrder/${userId}`, {
=======
    fetch(`http://207.244.230.118:5000/order/myOrder/${userId}`, {
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
      headers: { authorization: `Bearer ${localStorage.getItem("UserToken")}` },
    })
      .then((res) => res.json())
      .then((data) => setMyOrder(data.order));
  }, [myOrder]);
  console.log(myOrder);
  return (
    <div className={isOpen ? " blur-lg" : ""}>
      <div>
        <ShowMessage myOrder={myOrder} />
      </div>
      <section class="py-1 bg-blueGray-50">
        <div class="w-full  mb-12 xl:mb-0 px-4 mt-5">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md border rounded ">
            <div class="rounded-t mb-0 px-2 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-blueGray-700">
                    Order History
                  </h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"></div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              class="block w-full overflow-x-auto"
            >
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
                      Order Status
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Order Receipt
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {myOrder?.map((order) => (
                    <OrderRow
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      key={order._id}
                      order={order}
                    ></OrderRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <footer class="relative ">
          <div class="container mx-auto px-4 text-red-500">
            Dear customer, complete details of your order are in order receipt.
            Please check it out.
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Myorder;
