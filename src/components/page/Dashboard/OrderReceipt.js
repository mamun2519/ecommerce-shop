import html2canvas from "html2canvas";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import PageTitle from "../Utilitis/PageTitle";

const OrderReceipt = () => {
  const [user] = useAuthState(auth);
  const [order, setOrder] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
<<<<<<< HEAD
    fetch(`http://localhost:5000/order/${id}`)
=======
    fetch(`http://207.244.230.118:5000/order/${id}`)
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
      .then((res) => res.json())
      .then((data) => setOrder(data.order));
  }, []);
  const d = new Date();
  const jastDate =
    d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
  const dewenlodeReciptHendeler = () => {
    const screnShotTarget = document.getElementById("receipt");
    html2canvas(screnShotTarget).then((canvas) => {
      const base64Image = canvas.toDataURL("image/png");
      const anchor = document.createElement("a");
      anchor.setAttribute("href", base64Image);
      anchor.setAttribute("download", "my-order-receipt");
      anchor.click();
      anchor.remove();
    });
  };
  return (
    <div className="mb-40 px-4 lg:px-0">
      <PageTitle title="Order Receipt"></PageTitle>
      <div
        id="receipt"
        className="border rounded-md shadow-md relative w-full lg:w-9/12 mx-auto "
      >
        <div className="my-20 px-8 ">
          <div className=" w-24 lg:w-40 absolute top-0   lg:top-5  right-2 lg:right-10">
            <img src="/Assist/picture/paid2.jpg" alt="" />
          </div>
          <h1 className="text-2xl font-medium">Your Order Confirmed!</h1>

          <p className=" font-medium mt-5">Hello {user?.displayName},</p>
          <p className="">
            Your order Has been confirmed and will be shipping next to days.
          </p>

          <div className=" border-t border-b h-48 lg:h-24 mt-6">
            <div className=" grid grid-cols-2  lg:grid-cols-4">
              <div className="py-5">
                <h1>Order Date</h1>
                <span>{order?.paidAt}</span>
              </div>
              <div className="py-5">
                <h1>Order No</h1>
                <span>{order?.paymentInfo?.id}</span>
              </div>
              <div className="py-5">
                <h1>Payment</h1>
                <span>Card</span>
              </div>
              <div className="py-5">
                <h1>Shipping Address</h1>
                <p>
                  {order?.shippingInfo?.city},{order?.shippingInfo?.country}
                </p>
                {/* <span cls>{order?.shippingInfo?.phoneNo}</span> */}
              </div>
            </div>
          </div>

          <div>
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
                  {order?.orderItems?.map((item) => (
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
          </div>

          <div className="border-t">
            <div className="mt-2   lg:grid grid-cols-2">
              <div></div>
              <div>
                <div className=" grid grid-cols-2">
                  <p>SubTotal</p>
                  <span className="text-center">{order?.subTotalPrice}BDT</span>
                </div>
                <div className=" grid grid-cols-2">
                  <p>Shipping Fee</p>
                  <span className="text-center">
                    {order?.shippingPrice} BDT
                  </span>
                </div>
                <div className=" grid grid-cols-2 ">
                  <p className="text-sm">Discount</p>
                  <span className="text-center text-sm">
                    {order?.discount} BDT
                  </span>
                </div>
                <div className="border-t border-b mt-3">
                  <div className=" grid grid-cols-2 py-2">
                    <p className="">Total</p>
                    <span className="text-center ">
                      {order?.totalPrice} BDT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p>
              We Well be Sending a Shipping confrimation email when the items
              shipped successfully.
            </p>

            <div className="mt-3">
              <h3 className=" font-medium">Thank You for shopping with us</h3>
              <h3 className=" font-medium">Ceo Mamun</h3>
            </div>
          </div>
        </div>

        <div className=" bg-slate-200 py-2 px-8">
          <div className=" flex justify-between">
            <p className="text-sm">
              Need Help? <span>Visit our Help Center</span>
            </p>
            <span className="text-sm">{jastDate}</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button
          onClick={() => dewenlodeReciptHendeler()}
          className=" bg-slate-300 py-1 px-4 rounded"
        >
          Download Receipt
        </button>
      </div>

      <div>
        <button
          onClick={() => navigate("/dashboard/myorders")}
          className="bg-red-500 text-white px-6 py-2 rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default OrderReceipt;
