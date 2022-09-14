import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { CgMoreO, CgProfile } from "react-icons/cg";
import { BsFlagFill } from "react-icons/bs";
import PageTitle from "../Utilitis/PageTitle";
const Review = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {};
  return (
    <div className="mb-5 px-4 lg:px-0">
      <PageTitle title='Review'></PageTitle>
      <div className="w-full lg:w-9/12 mx-auto border  shadow-md rounded-lg p-5 h[700px]">
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
              <BsFlagFill />
            </div>
            <label for="username" class="block text-sm text-black">
              country
            </label>

            <input
              {...register("country", {
                required: {
                  value: true,
                  message: "Country is Required",
                },
              })}
              type="text"
              placeholder="Enter country"
              class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
            />

            <label class="label">
              {errors.country?.type === "required" && (
                <span className="text-red-500">{errors.country.message}</span>
              )}
            </label>
          </div>
        </div>
        <div className="relative">
            <div className="border p-2  w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
              <CgMoreO />
            </div>
            <label for="username" class="block text-sm text-black">
              Comment
            </label>

            <textarea
              {...register("comment", {
                required: {
                  value: true,
                  message: "Comment is Required",
                },
              })}
              type="text"
              placeholder="Write now"
              class="block pl-12 w-full h-48 px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
            />
            <label class="label">
              {errors.comment?.type === "required" && (
                <span className="text-red-500">{errors.comment.message}</span>
              )}
            </label>
          </div>
          <div class="mt-2 text-center">
          <input
            type="submit"
            value="Comment"
            class=" px-16 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#062C30] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
