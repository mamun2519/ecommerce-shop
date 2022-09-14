import React from 'react';
import { useForm } from 'react-hook-form';
import { AiFillPushpin, AiOutlineMail } from 'react-icons/ai';
import { BsFlagFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaCity, FaRegAddressBook } from 'react-icons/fa';
import { GiMatterStates } from 'react-icons/gi';
import { MdPhoneAndroid } from 'react-icons/md';

const CustomerService = () => {
      const {
            register,
            formState: { errors },
            handleSubmit,
          } = useForm();
      const onSubmit = async (data) => {
           
          };
      return (
            <div data-aos="fade-down"
    data-aos-duration="1000">
      <section class="py-1 bg-blueGray-50 mt-10">
        <div class="w-full lg:w-9/12 m-auto  mb-6 xl:mb-0 px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md border rounded ">

            <div className='p-5'>
        <h3 className='text-2xl font-medium'>CONTACT US</h3>

        <div className=' grid lg:grid-cols-2  grid-cols-1 gap-5 mt-5'>
            <div className='text-center'>
            <div className="border p-2 text-center  w-9 m-auto rounded  text-[#EC255A]">
              <MdPhoneAndroid /> 
            </div>
            <div className='mt-2'>
            <h1 className='font-medium'>Hotline</h1>
            <p>(+88) 018 60 700 702 </p>
<p>7 days a week, 10:00 am to 8:00 pm (BST)</p>
            </div>
            
            </div>
            <div className='text-center'>
            <div className="border p-2 text-center  w-9 m-auto rounded  text-[#EC255A]">
              <AiOutlineMail /> 
            </div>
            <div className='mt-2'>
            <h1 className='font-medium'>Email</h1>
            <p>customerservice.smart-e-shop@b.net </p>

            </div>
            
            </div>
        </div>

        <div className=' border-b w-full mt-8'>
        </div>

        <div>
            <h1 className='font-medium'>There's nothing we love to do more than hearing from our customers like you. Please fill in your information and we will get back to you in no time.</h1>

            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mt-5">
            <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
              <BsFlagFill />
            </div>
            <label for="username" class="block text-sm text-black">
            Topic
            </label>

            <select
              {...register("topic", {
                required: {
                  value: true,
                  message: "Topic is Required",
                },
              })}
              // value={country}
              
              type="text"
              placeholder="Country"
              class="block pl-12 w-full px-4 py-2 mt-2  text-black border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
            >
              <option value="Select Topic">Select Topic</option>
              <option value="Customer Service">Customer Service</option>
              <option value="Online Order">Online Order</option>
              <option value="Etc<">Etc</option>
              
            </select>

            <label class="label">
              {errors.topic?.type === "required" && (
                <span className="text-red-500">{errors.topic.message}</span>
              )}
            </label>
          </div>
        <div className="w-full grid-cols-1 grid lg:grid-cols-2 gap-5 ">
            
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
              Phone Number
            </label>

            <input
              {...register("number", {
                required: {
                  value: true,
                  message: "Number is Required",
                },
              })}
              // value={country}
              
              type="text"
              placeholder="Phone"
              class="block pl-12 w-full px-4 py-2 mt-2  text-black border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
            />

<label class="label">
              {errors.number?.type === "required" && (
                <span className="text-red-500">{errors.number.message}</span>
              )}
            </label>
            
           
         
          </div>
        </div>

        <div className="relative mt-5">
            <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
              <BsFlagFill />
            </div>
            <label for="username" class="block text-sm text-black">
            Message
            </label>
            <textarea
              {...register("message", {
                required: {
                  value: true,
                  message: "message is Required",
                },
              })}
              // value={country}
              
              type="text"
              placeholder="Message"
              class="block pl-12 w-full h-36 px-4 py-2 mt-2  text-black border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
            />
             

            <label class="label">
              {errors.message?.type === "required" && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </label>
            <label class="label">
              {errors.country?.type === "required" && (
                <span className="text-red-500">{errors.country.message}</span>
              )}
            </label>

            
          </div>
        
     

        <div class="mt-2 text-center">
          <input
            type="submit"
            value="Send"
            class=" px-8 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#062C30] rounded-md"
          />
        </div>
      </form>
            </div>
        </div>

            </div>
            
          </div>
        </div>
      </section>

  
    </div>
      );
};

export default CustomerService;