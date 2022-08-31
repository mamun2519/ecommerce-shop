import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiLockOpenAlt } from "react-icons/bi";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {}
  return (
    <div className="mb-20 px-4 lg:px-0">
      <div className="w-full lg:w-9/12 mx-auto border  shadow-md rounded-lg p-5">
        <div className=" ">
          <img
            className="rounded-xl relative h-[150px] lg:h-[250px] w-full "
            src="https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover.jpg"
            alt=""
          />
        </div>
        <div className="mt-2">
          <p className="pl-[165px] text-xl font-medium">{user?.displayName}</p>
          <p className="pl-[165px] text-sm">Update Photo And Personal Details</p>
        </div>
        <div className="">
          <div class="avatar online">
            <div class="w-28 rounded-full absolute top-[-150px] lg:top-[-110px] left-10">
              <img className=""  src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?cs=srgb&dl=pexels-mixu-1323206.jpg&fm=jpg" />
            </div>
          </div>
        

        </div>
      
        <div className="mt-5">
          <div className=" grid grid-cols-3">
            <div className="flex  items-center py-0">
              <p>Username</p>
            </div>
            <div className="col-span-2">
              <div class="">
                <div class="flex items-center justify-between relative">
                  <div className="border p-2   w-9 rounded absolute top-[12px] left-1 bg-red-200">
                    <BiLockOpenAlt />
                  </div>
                </div>

                <input
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Username is Required",
                    }
                  
                  })}
                  type="text"
                  placeholder="Enter username"
                  class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {errors.username?.type === "required" && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
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
                   {...register("jobtitle", {
                    required: {
                      value: true,
                      message: "Job Title is Required",
                    }
                  
                  })}
                  type="text"
                  placeholder="Enter Job Title"
                  class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {errors.jobtitle?.type === "required" && (
              <span className="text-red-500">{errors.jobtitle.message}</span>
            )}
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
                  {...register("bio", {
                    required: {
                      value: true,
                      message: "Bio is Required",
                    },
                   
                  })}
                  type="text"
                  placeholder="Enter Bio"
                  class="block w-full h-[100px] px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {errors.bio?.type === "required" && (
              <span className="text-red-500">{errors.bio.message}</span>
            )}
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
                  {...register("profession", {
                    required: {
                      value: true,
                      message: "Profession is Required",
                    },
                 
                  })}
                  type="text"
                  placeholder="Enter Profession"
                  class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {errors.profession?.type === "required" && (
              <span className="text-red-500">{errors.profession.message}</span>
            )}
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
                  {...register("univercity", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    }
                  })}
                  type="text"
                  placeholder="Enter Univercity"
                  class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {errors.univercity?.type === "required" && (
              <span className="text-red-500">{errors.univercity.message}</span>
            )}
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
                  {...register("birthday", {
                    required: {
                      value: true,
                      message: "Birthday is Required",
                    },
                    
                  })}
                  type="date"
                  placeholder="Enter Birthday"
                  class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {errors.birthday?.type === "required" && (
              <span className="text-red-500">{errors.birthday.message}</span>
            )}
                </label>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-3 mt-">
            <div className="mt-5  py-0">
              <div>
              <p>Alternative Contect Email</p>
              <p className="text-sm ">Enter On Allternative email if you like to be contact by defarnt Email</p>
              
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
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    }
                  })}
                  type="email"
                  placeholder="Enter Email"
                  class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {errors.email?.type === "required" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
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
