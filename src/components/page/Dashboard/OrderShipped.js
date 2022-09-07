import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const OrderShipped = () => {
  const { id } = useParams();
  const [shippedInfo, setShippedInfo] = useState({});
  const orderStatusRef = useRef();
  const [orderStatus, setOrderStatus] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`http://localhost:5000/order/${id}`)
      .then((res) => res.json())
      .then((data) => setShippedInfo(data?.order));
  }, [shippedInfo]);

  const selectDelivaryHendeler = (e) => {
    setOrderStatus(e.target.value);
  };

  const confromOrderDelivaryHendeler = () => {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status: orderStatus }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`order ${orderStatus} SuccessFull`);
        }
        console.log(data);
      });
  };
  console.log(shippedInfo);
  return (
    <div className="mb-20 px-4 lg:px-0">
      <div className=" grid grid-cols-2  lg:grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="relative   min-w-0 break-words bg-white w-full mb-6 shadow-md border rounded">
            <div className="p-5">
              <h1 className=" font-medium">Shippment Informatin</h1>
              <div className=" grid grid-cols-2 gap-10 mt-2">
                <div>
                  <p>Costomer Name</p>
                </div>
                <div>
                  <p>{shippedInfo?.user?.name}</p>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Email</p>
                </div>
                <div>
                  <p>{shippedInfo?.user?.email}</p>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Address</p>
                </div>
                <div>
                  <p>{shippedInfo?.shippingInfo?.address}</p>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">City</p>
                </div>
                <div>
                  <p>{shippedInfo?.shippingInfo?.city}</p>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Country</p>
                </div>
                <div>
                  <p>{shippedInfo?.shippingInfo?.country}</p>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">State</p>
                </div>
                <div>
                  <p>{shippedInfo?.shippingInfo?.state}</p>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Contact Number</p>
                </div>
                <div>
                  <p>{shippedInfo?.shippingInfo?.phoneNo}</p>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Pin Code</p>
                </div>
                <div>
                  <p>{shippedInfo?.shippingInfo?.pinCode}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative  min-w-0 break-words bg-white w-full mb-6 shadow-md border rounded ">
            <div className="p-5">
              <h1 className=" font-medium">Order Information</h1>
              <div class="overflow-x-auto my-5">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr className="">
                      <th>Picture</th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Product Name</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Quantity</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Price</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Total Price</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody class="text-sm divide-y divide-gray-100">
                    {shippedInfo?.orderItems?.map((item) => (
                      <tr key={item._id}>
                        <td class="p-2 ">
                          <div class="avatar  flex justify-center">
                            <div class=" w-10 rounded-xl">
                              <img src={item?.image} />
                            </div>
                          </div>
                        </td>
                        <td class="p-2 ">
                          <div class="font-medium text-gray-800 ">
                            {item?.name}
                          </div>
                        </td>
                        <td class="p-2">
                          <div class="text-left">{item?.quantity}</div>
                        </td>
                        <td class="p-2">
                          <div class="text-left font-medium text-green-500">
                            {item?.price}
                          </div>
                        </td>
                        <td class="p-2 ">
                          <div class="text-left font-medium text-green-500 pl-8">
                            {item?.totalPrice}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border-t">
                <div className="mt-2   lg:grid grid-cols-2">
                  <div></div>
                  <div>
                    <div className=" grid grid-cols-2">
                      <p className=" text-gray-600">SubTotal</p>
                      <span className="text-center">
                        {shippedInfo?.subTotalPrice}BDT
                      </span>
                    </div>
                    <div className=" grid grid-cols-2">
                      <p className=" text-gray-600">Shipping Fee</p>
                      <span className="text-center">
                        {shippedInfo?.shippingPrice} BDT
                      </span>
                    </div>
                    <div className=" grid grid-cols-2 ">
                      <p className="text-sm ">Discount</p>
                      <span className="text-center text-sm">
                        {shippedInfo?.discount} BDT
                      </span>
                    </div>
                    <div className="border-t border-b mt-3">
                      <div className=" grid grid-cols-2 py-2">
                        <p className=" text-gray-600">Total</p>
                        <span className="text-center ">
                          {shippedInfo?.totalPrice} BDT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative  col-span-2 min-w-0 break-words bg-white w-full mb-6 shadow-md border rounded">
            <div className="p-5">
              <h1 className=" font-medium">Payment Information</h1>

              <div className=" grid grid-cols-2 gap-10 mt-2">
                <div>
                  <p className=" text-gray-600">Total Payment</p>
                </div>
                <div>
                  <p>{shippedInfo?.totalPrice} BDT</p>
                </div>
              </div>

              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Peyment Method</p>
                </div>
                <div>
                  <p>Card</p>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Peyment Status</p>
                </div>
                <div>
                  <p>{shippedInfo?.paymentInfo?.status}</p>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Peyment Id</p>
                </div>
                <div>
                  <p>{shippedInfo?.paymentInfo?.id}</p>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-10 mt-1">
                <div>
                  <p className=" text-gray-600">Peyment Date</p>
                </div>
                <div>
                  <p>{shippedInfo?.paidAt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* shipped part  */}
        <div className="relative min-w-0 break-words bg-white w-full mb-6 shadow-md border rounded h-[200px]">
          <div className="p-5">
            <h1 className=" font-medium">Order Shipped</h1>
            <div className="mt-3">
              <select
                ref={orderStatusRef}
                onChange={(e) => selectDelivaryHendeler(e)}
                class="w-full block  
  px-2 py-2   bg-slate-100 border rounded-md   outline-none  focus:border-blue-400 mt-2 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
              >
                <option value={shippedInfo?.orderStatus} selected>
                  {shippedInfo?.orderStatus}
                </option>
                <option value="Shipped">Order Shipped</option>
                <option value="Delivered">Order Delivered</option>
              </select>
            </div>

            <div class="mt-4">
              <button
                disabled={shippedInfo?.orderStatus == "Delivered" && "disabled"}
                onClick={() => confromOrderDelivaryHendeler()}
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-400 rounded-md"
              >
                {shippedInfo?.orderStatus == "Processing" && "Shipped Now"}
                {shippedInfo?.orderStatus == "Shipped" && "Delivered Now"}
                {shippedInfo?.orderStatus == "Delivered" && "Order Delivered"}
              </button>
            </div>
          </div>
        </div>
        <div>
            <button onClick={()=>navigate('/dashboard/manageOrder')} className="bg-red-500 text-white px-6 py-2 rounded-lg">Back</button>
      </div>
      </div>
    </div>
  );
};

export default OrderShipped;
