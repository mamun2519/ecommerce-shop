import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

const PaymentNow = () => {
      return (
            <div className="card lg:w-2/3 w-full m-auto  border p-3">
                    <div class="">
      <div class="p-2">
        <div className="pb-4 border-b border-gray-100">
          <p className="font-semibold text-center">Payment Now</p>
        </div>

        <div>
        <div className="relative mt-2">
            <div className="border p-2  w-9 rounded absolute top-[32px] left-1 bg-red-200">
              <CgProfile />
            </div>
            <label for="username" class="block text-sm text-black">
              Card Information
            </label>

            <input
            //   {...register("name", {
            //     required: {
            //       value: true,
            //       message: "Name is Required",
            //     },
            //   })}
              type="text"
              placeholder="Name"
              class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
            />
            <label class="label">
              {/* {errors.name?.type === "required" && (
                <span className="text-red-500">{errors.name.message}</span>
              )} */}
            </label>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="relative">
            <div className="border p-2   w-9 rounded absolute top-[32px] left-1 bg-red-200">
              <CgProfile />
            </div>
            <label for="username" class="block text-sm text-black">
              Card Expire
            </label>

            <input
            //   {...register("pinCode", {
            //     required: {
            //       value: true,
            //       message: "PinCode is Required",
            //     },
            //   })}
              type="Number"
              placeholder=" PinCode"
              class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
            />
            <label class="label">
              {/* {errors.pinCode?.type === "required" && (
                <span className="text-red-500">{errors.pinCode.message}</span>
              )} */}
            </label>
          </div>
          <div className="relative">
            <div className="border p-2   w-9 rounded absolute top-[32px] left-1 bg-red-200">
              <AiOutlineMail />
            </div>
            <label for="username" class="block text-sm text-black">
              Zip Code
            </label>

            <input
            //   {...register("phoneNo", {
            //     required: {
            //       value: true,
            //       message: "Phone Number is Required",
            //     },
            //   })}
              type="number"
              placeholder="Phone Number"
              class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
            />

            <label class="label">
              {/* {errors.phoneNo?.type === "required" && (
                <span className="text-red-500">{errors.phoneNo.message}</span>
              )} */}
            </label>
          </div>
        </div>
          
        </div>
       
      
      

          <div class="mt-6 text-center">
            <button
            onClick={()=> ('/chackout/orderReview/payment')}
             class="w-1/2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-400 rounded-md">
              Payment
            </button>
          </div>
        </div>
      </div>
    </div>
           
         
      );
};

export default PaymentNow;