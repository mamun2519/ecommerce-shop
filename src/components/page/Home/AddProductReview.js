import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';
import { BiLockOpenAlt } from 'react-icons/bi';

const AddProductReview = () => {
      const {
            register,
            formState: { errors },
            handleSubmit,
          } = useForm();
          const onSubmit = (data) => {}
      return (
            <div className="lg:w-3/6 mx-auto  grid grid-cols-2">
          
              <div className="col-span-2">
                <div className="relative   min-w-0 break-words bg-white w-full shadow-md border rounded">
                  <div className="p-5">
                    <h1 className=" font-medium text-2xl">any Product Review</h1>

                    <div>
                    <div className="relative">
          <div className="border p-2   w-9 rounded absolute top-[5px] left-1 bg-red-200">
            <AiOutlineMail />
          </div>

          <input
            {...register("name", {
              required: {
                value: true,
                message: "name is Required",
              },
             
            })}
            type="name"
            placeholder="Enter Name"
            class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          />
          <label class="label">
            {errors.email?.type === "required" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </label>
        </div>

        <div class="mt-3">
          <div class="flex items-center justify-between relative">
            <div className="border p-2   w-9 rounded absolute top-[13px] left-1 bg-red-200">
              <BiLockOpenAlt />
            </div>
          </div>

          <textarea
            {...register("comment", {
              required: {
                value: true,
                message: "comment is Required",
              },
            })}
            type="text"
            placeholder="comment Sameting"
            class="block w-full h-42 px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <label class="label">
            {/* {errors.password?.type === "required" && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            {errors.password?.type === "minLength" && (
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

export default AddProductReview;