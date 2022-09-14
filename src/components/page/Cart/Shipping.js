import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillPushpin, AiOutlineMail } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { BsFlagFill } from "react-icons/bs";
import { GiMatterStates} from "react-icons/gi";
import { FaCity} from "react-icons/fa";
import { MdPhoneAndroid} from "react-icons/md";

import { CgProfile } from "react-icons/cg";
import { Country, State, City } from "country-state-city";
import { useDispatch,} from "react-redux";
import { sendShipingInfoLocalSorage } from "../Futurecher/Slice/shippingPriceSlice";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import PageTitle from "../Utilitis/PageTitle";
const Shipping = () => {
  const [user] = useAuthState(auth);
  const [country, setCoutry] = useState("");
  const [state, setState] = useState("");
  const disPatch = useDispatch();
  const navigate = useNavigate();
  

  const shippingInfoParce = localStorage.getItem("ShippingInfo");
  const shipping = JSON.parse(shippingInfoParce);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: user?.displayName,
      email: user?.email,
      address: shipping?.address,
      phoneNo: shipping?.phoneNo,
      pinCode: shipping?.pinCode,
    },
  });

  const onSubmit = async (data) => {
    disPatch(sendShipingInfoLocalSorage(data));
    navigate("/chackout/orderReview");
  };
  return (
    <div className="card lg:w-2/3 w-full m-auto  border p-4">
      <PageTitle title='Shipping Info'></PageTitle>
      <div className="pb-4 border-b border-gray-100">
        <p className="font-semibold text-center">Shipping Info</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full grid-cols-1 grid lg:grid-cols-2 gap-5 mt-5">
          <div className="relative">
            <div className="border p-2  w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
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
            <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
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
        <div className="w-full grid grid-cols-1  lg:grid-cols-2 gap-5">
          <div className="relative">
            <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
              <FaRegAddressBook />
            </div>
            <label for="username" class="block text-sm text-black">
              Address
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
            <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
              <BsFlagFill />
            </div>
            <label for="username" class="block text-sm text-black">
              Country
            </label>

            <select
              {...register("country", {
                required: {
                  value: true,
                  message: "Country is Required",
                },
              })}
              // value={country}
              onChange={(e) => setCoutry(e.target.value)}
              type="text"
              placeholder="Country"
              class="block pl-12 w-full px-4 py-2 mt-2  text-black border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((con) => (
                  <option key={con.isoCode} value={con.isoCode}>
                    {con?.name}
                  </option>
                ))}
            </select>

            <label class="label">
              {errors.country?.type === "required" && (
                <span className="text-red-500">{errors.country.message}</span>
              )}
            </label>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="relative">
            <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
              <GiMatterStates />
            </div>
            <label for="username" class="block text-sm text-black">
              State
            </label>

            <select
              {...register("state", {
                required: {
                  value: true,
                  message: "State is Required",
                },
              })}
              // value={state}
              onChange={(e) => setState(e.target.value)}
              type="text"
              placeholder="State"
              class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
            >
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry(country).map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
            <label class="label">
              {errors.state?.type === "required" && (
                <span className="text-red-500">{errors.state.message}</span>
              )}
            </label>
          </div>
          <div className="relative">
            <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
              <FaCity />
            </div>
            <label for="username" class="block text-sm text-black">
              City
            </label>

            <select
              {...register("city", {
                required: {
                  value: true,
                  message: "City is Required",
                },
              })}
              type="text"
              placeholder="City"
              class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
            >
              {/* getAllCities */}
              <option value="">City</option>
              {City?.getCitiesOfState(country, state).map((item) => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>
              ))}
            </select>

            <label class="label">
              {errors.city?.type === "required" && (
                <span className="text-red-500">{errors.city.message}</span>
              )}
            </label>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="relative">
            <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
              <AiFillPushpin />
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
            <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
              <MdPhoneAndroid />
            </div>
            <label for="username" class="block text-sm text-black">
              Phone Number
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

        <div class="mt-2 text-center">
          <input
            type="submit"
            value="Confrom Shipping"
            class=" px-8 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#062C30] rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default Shipping;
