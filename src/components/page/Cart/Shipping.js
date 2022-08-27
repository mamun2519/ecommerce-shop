import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockOpenAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Country, State, City }  from 'country-state-city';

const Shipping = () => {
      const [country , setCoutry] = useState("")
      // console.log(Country.getAllCountries().map((con) => console.log(con.name)));
      const {
            register,
            formState: { errors },
            handleSubmit,
          } = useForm();
          const onSubmit = async (data) => {
            console.log(data);
          }
      return (
            <div className='card lg:w-2/3 w-full m-auto  border p-3'>
                  <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full grid-cols-1 grid lg:grid-cols-2 gap-5'>
                        <div className="relative">
          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 bg-red-200">
            <CgProfile />
          </div>
          <label for="username" class="block text-sm text-black">
            Name
          </label>

          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
            type="text"
            placeholder="Name"
            class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </label>
        </div>
        <div className="relative">
          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 bg-red-200">
            <AiOutlineMail />
          </div>
          <label for="username" class="block text-sm text-black">
            Email & Username
          </label>

          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
            type="email"
            placeholder="Email address"
            class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          />

          <label class="label">
            {errors.email?.type === "required" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </label>
        </div>

                        </div>
                        <div className='w-full grid grid-cols-1  lg:grid-cols-2 gap-5'>
                        <div className="relative">
          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 bg-red-200">
            <CgProfile />
          </div>
          <label for="username" class="block text-sm text-black">
          address
          </label>

          <input
            {...register("address", {
              required: {
                value: true,
                message: "Address is Required",
              },
            })}
            type="text"
            placeholder="Address"
            class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          />
          <label class="label">
            {errors.address?.type === "required" && (
              <span className="text-red-500">{errors.address.message}</span>
            )}
          </label>
        </div>
        <div className="relative">
          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 bg-red-200">
            <AiOutlineMail />
          </div>
          <label for="username" class="block text-sm text-black">
          Country
          </label>

          <select
            {...register("country", {
              required: {
                value: true,
                message: "Country is Required",
              }

            })}
            value={country}
            onChange={(e)=> setCoutry(e.target.value)}
            type="text"
            placeholder="Country"
            class="block pl-12 w-full px-4 py-2 mt-2  text-black border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          >
          <option value="">Country</option>
            {Country && 
            Country.getAllCountries().map((con) =>  <option key={con.isoCode} value={con?.name}>{con?.name}</option> 
           

            )}
          
          </select>

          <label class="label">
            {errors.country?.type === "required" && (
              <span className="text-red-500">{errors.country.message}</span>
            )}
           
          </label>
        </div>

                        </div>
                        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className="relative">
          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 bg-red-200">
            <CgProfile />
          </div>
          <label for="username" class="block text-sm text-black">
          state
          </label>

          <input
            {...register("state", {
              required: {
                value: true,
                message: "State is Required",
              },
            })}
            type="text"
            placeholder="State"
            class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          />
          <label class="label">
            {errors.state?.type === "required" && (
              <span className="text-red-500">{errors.state.message}</span>
            )}
          </label>
        </div>
        <div className="relative">
          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 bg-red-200">
            <AiOutlineMail />
          </div>
          <label for="username" class="block text-sm text-black">
          City
          </label>

          <input
            {...register("city", {
              required: {
                value: true,
                message: "City is Required",
              }
             
            })}
            type="text"
            placeholder="City"
            class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          />

          <label class="label">
            {errors.city?.type === "required" && (
              <span className="text-red-500">{errors.city.message}</span>
            )}
           
          </label>
        </div>

                        </div>
                        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className="relative">
          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 bg-red-200">
            <CgProfile />
          </div>
          <label for="username" class="block text-sm text-black">
          PinCode
          </label>

          <input
            {...register("pinCode", {
              required: {
                value: true,
                message: "PinCode is Required",
              },
            })}
            type="Number"
            placeholder=" PinCode"
            class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          />
          <label class="label">
            {errors.pinCode?.type === "required" && (
              <span className="text-red-500">{errors.pinCode.message}</span>
            )}
          </label>
        </div>
        <div className="relative">
          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 bg-red-200">
            <AiOutlineMail />
          </div>
          <label for="username" class="block text-sm text-black">
          phone Number
          </label>

          <input
            {...register("phoneNo", {
              required: {
                value: true,
                message: "Phone Number is Required",
              },
             
            })}
            type="number"
            placeholder="Phone Number"
            class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          />

          <label class="label">
            {errors.phoneNo?.type === "required" && (
              <span className="text-red-500">{errors.phoneNo.message}</span>
            )}
          
          </label>
        </div>

                        </div>
        

       

        <div class="mt-4 text-right">
          <input
            type="submit"
            value="Regestion"
            class=" px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-400 rounded-md"
          />
         
        </div>
      </form>
            </div>
      );
};

export default Shipping;