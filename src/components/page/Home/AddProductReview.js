import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockOpenAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const AddProductReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {};
  const [number, setNumber] = useState(0);
  console.log(number);
  return (
    <div className="lg:w-3/6 mx-auto  grid grid-cols-2">
      <div className="col-span-2">
        <div className="relative   min-w-0 break-words bg-white w-full ">
          <div className="">
            <h1 className=" font-medium text-2xl">Please Share Your Review</h1>

            <div>
              <div className=" flex  justify-center mt-5">
                {Array(5)
                  .fill()
                  .map((_, index) =>
                    number >= index + 1 ? (
                      <AiFillStar
                        className="text-orange-600 text-3xl"
                        onClick={() => setNumber(index + 1)}
                      />
                    ) : (
                      <AiOutlineStar
                        className="text-orange-600 text-3xl"
                        onClick={() => setNumber(index + 1)}
                      />
                    )
                  )}
              </div>

              <div class="mt-2">
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
                  placeholder="Write Your Product FeedBack"
                  class="block w-full h-[200px] px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label class="label">
                  {/* {errors.password?.type === "required" && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-500">{errors.password.message}</span>
            )} */}
                </label>

                <div class="">
                  <input
                    type="submit"
                    value="Submit"
                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-400 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductReview;
