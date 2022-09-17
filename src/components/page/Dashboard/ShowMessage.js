import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { AiFillStar } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
const ShowMessage = ({ myOrder }) => {
  const [user, lodaing] = useAuthState(auth);
  const [delivered, setDelivered] = useState([]);

  useEffect(() => {
    const shippiped = myOrder?.filter(
      (order) => order.orderStatus == "Delivered"
    );
    setDelivered(shippiped);
  }, [myOrder]);

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5 lg:gap-20 lg:pr-19 px-4">
      <div data-aos="fade-right"
        data-aos-duration="1000">
        {" "}
        <div class="card w-full text-center  h-36 bg-base-100 shadow-md border rounded-md">
          <div class="p-5">
            <h1 className="text-xl  font-medium">
              {user?.displayName},{" "}
              {hour >= 12 ? (
                hour >= 16 ? (
                  <p>Good Evening</p>
                ) : (
                  <p>Good Afternoon</p>
                )
              ) : (
                <p>Good Morning</p>
              )}
            </h1>

            <h3 className="">Wellcome Back Our DashBoard</h3>
          </div>
        </div>
      </div>
      <div data-aos="fade-right"
        data-aos-duration="1000">
        <div class="card w-full  text-center h-36 bg-base-100 shadow-md border rounded-md ">
          <div class="p-5">
            <h1 className="text-xl  font-medium">Total Order</h1>
            <p className="text-2xl  font-medium">{myOrder?.length}</p>
            {myOrder?.length == 0 ? (
              <p>You have not order yet.visit our shopping page to order.</p>
            ) : (
              <p>Wait for the order to be shipped</p>
            )}
          </div>
        </div>
      </div >
      <div data-aos="fade-right"
        data-aos-duration="1000" className="">
        <div class="card w-full delivary text-center h-36 bg-base-100 shadow-md border rounded-md">
          <div class="p-5">
            <h1 className="text-xl  font-medium">Order Delivard</h1>
            <p className="text-2xl  font-medium">{delivered?.length}</p>
            {myOrder?.length == 0 ? (
              <p>No delivery sent</p>
            ) : (
              <h3 className="">We have delivered your order</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMessage;
