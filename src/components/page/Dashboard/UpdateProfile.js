import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiLockOpenAlt } from "react-icons/bi";
import auth from "../../../firebase.init";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div className="w-full lg:w-9/12 mx-auto border  p-5">
        <div className=" ">
          <img
            className=" rounded-xl relative h-[250px] w-full "
            src="https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover.jpg"
            alt=""
          />
        </div>
        <div className=" absolute top-[320px] right-[760px]">
          <div class="avatar online">
            <div class="w-28 rounded-full">
              <img src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?cs=srgb&dl=pexels-mixu-1323206.jpg&fm=jpg" />
            </div>
          </div>
        </div>
        <div className="mt-1">
          <p className="pl-[175px] text-xl font-medium">{user?.displayName}</p>
          <p className="pl-[175px] ">Update Photo And Personal Details</p>
        </div>

        <div className="mt-20">
          <div className=" grid grid-cols-3">
            <div className="flex  items-center py-0">
              <p>User Name</p>
            </div>
            <div className=" col-span-2">
              <div class="">
                <div class="flex items-center justify-between relative">
                  <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                    <BiLockOpenAlt />
                  </div>
                </div>

                <input
                  // {...register("password", {
                  //   required: {
                  //     value: true,
                  //     message: "Password is Required",
                  //   },
                  //   minLength: {
                  //     value: 6,
                  //     message: "Must be 6 characters or longer",
                  //   },
                  // })}
                  type="password"
                  placeholder="Password"
                  class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {/* {errors.password?.type === "required" && (
              <span className="text-red-500">{errors.password.message}</span>
            )} */}
                </label>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-3 mt-">
            <div className="flex  items-center py-0">
              <p>Job Title</p>
            </div>
            <div className=" col-span-2">
              <div class="">
                <div class="flex items-center justify-between relative">
                  <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                    <BiLockOpenAlt />
                  </div>
                </div>

                <input
                  // {...register("password", {
                  //   required: {
                  //     value: true,
                  //     message: "Password is Required",
                  //   },
                  //   minLength: {
                  //     value: 6,
                  //     message: "Must be 6 characters or longer",
                  //   },
                  // })}
                  type="password"
                  placeholder="Password"
                  class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {/* {errors.password?.type === "required" && (
              <span className="text-red-500">{errors.password.message}</span>
            )} */}
                </label>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-3 mt-">
            <div className="flex  items-center py-0">
              <p>Your Bio</p>
            </div>
            <div className=" col-span-2">
              <div class="">
                <div class="flex items-center justify-between relative">
                  <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                    <BiLockOpenAlt />
                  </div>
                </div>

                <textarea
                  // {...register("password", {
                  //   required: {
                  //     value: true,
                  //     message: "Password is Required",
                  //   },
                  //   minLength: {
                  //     value: 6,
                  //     message: "Must be 6 characters or longer",
                  //   },
                  // })}
                  type="password"
                  placeholder="Password"
                  class="block w-full h-[100px] px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {/* {errors.password?.type === "required" && (
              <span className="text-red-500">{errors.password.message}</span>
            )} */}
                </label>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-3 mt-">
            <div className="flex  items-center py-0">
              <p>Profession</p>
            </div>
            <div className=" col-span-2">
              <div class="">
                <div class="flex items-center justify-between relative">
                  <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                    <BiLockOpenAlt />
                  </div>
                </div>

                <input
                  // {...register("password", {
                  //   required: {
                  //     value: true,
                  //     message: "Password is Required",
                  //   },
                  //   minLength: {
                  //     value: 6,
                  //     message: "Must be 6 characters or longer",
                  //   },
                  // })}
                  type="password"
                  placeholder="Password"
                  class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {/* {errors.password?.type === "required" && (
              <span className="text-red-500">{errors.password.message}</span>
            )} */}
                </label>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-3 mt-">
            <div className="flex  items-center py-0">
              <p>Univercity Name</p>
            </div>
            <div className=" col-span-2">
              <div class="">
                <div class="flex items-center justify-between relative">
                  <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                    <BiLockOpenAlt />
                  </div>
                </div>

                <input
                  // {...register("password", {
                  //   required: {
                  //     value: true,
                  //     message: "Password is Required",
                  //   },
                  //   minLength: {
                  //     value: 6,
                  //     message: "Must be 6 characters or longer",
                  //   },
                  // })}
                  type="password"
                  placeholder="Password"
                  class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {/* {errors.password?.type === "required" && (
              <span className="text-red-500">{errors.password.message}</span>
            )} */}
                </label>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-3 mt-">
            <div className="flex  items-center py-0">
              <p>Date Of Biths</p>
            </div>
            <div className=" col-span-2">
              <div class="">
                <div class="flex items-center justify-between relative">
                  <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                    <BiLockOpenAlt />
                  </div>
                </div>

                <input
                  // {...register("password", {
                  //   required: {
                  //     value: true,
                  //     message: "Password is Required",
                  //   },
                  //   minLength: {
                  //     value: 6,
                  //     message: "Must be 6 characters or longer",
                  //   },
                  // })}
                  type="password"
                  placeholder="Password"
                  class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {/* {errors.password?.type === "required" && (
              <span className="text-red-500">{errors.password.message}</span>
            )} */}
                </label>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-3 mt-">
            <div className="flex  items-center py-0">
              <div>
              <p>Alternative Contect Email</p>
              <p className="text-sm">Enter On Allternative email if you like to be contact by defarnt Email</p>
              </div>
            </div>
            <div className=" col-span-2">
              <div class="">
                <div class="flex items-center justify-between relative">
                  <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                    <BiLockOpenAlt />
                  </div>
                </div>

                <input
                  // {...register("password", {
                  //   required: {
                  //     value: true,
                  //     message: "Password is Required",
                  //   },
                  //   minLength: {
                  //     value: 6,
                  //     message: "Must be 6 characters or longer",
                  //   },
                  // })}
                  type="password"
                  placeholder="Password"
                  class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {/* {errors.password?.type === "required" && (
              <span className="text-red-500">{errors.password.message}</span>
            )} */}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
